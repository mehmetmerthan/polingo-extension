import { listWords } from "../graphql/queries";
import { createWord } from "../graphql/mutations";
import { generateClient } from "aws-amplify/api";
import { getUserId } from "./userService";
const client = generateClient();
let userId;
const initializeUserId = async () => {
  if (!userId) {
    userId = await getUserId();
  }
};
export const addWord = async (params) => {
  await initializeUserId();
  const { newWord, newWordTranslation } = params;
  const word = newWord.toLowerCase();
  const translation = newWordTranslation.toLowerCase();
  const checkWord = await searchWord({ searchWord: word });
  if (checkWord.length > 0) {
    return { error: "Word already exists in the list." };
  }
  const wordDetails = {
    userWordsId: userId,
    isLearned: false,
    word: word,
    translation: translation,
    type: "word",
  };
  try {
    const { data } = await client.graphql({
      query: createWord,
      variables: { input: wordDetails },
    });
    const result = data.createWord;
    return result;
  } catch (error) {
    console.error("Error adding the word", error);
  }
};

export const searchWord = async (params) => {
  await initializeUserId();
  const { searchWord } = params;
  const word = searchWord.toLowerCase();
  try {
    const variables = {
      filter: {
        userWordsId: { eq: userId },
        word: { eq: word },
      },
    };
    const { data } = await client.graphql({ query: listWords, variables });
    const allWords = data.listWords.items;
    return allWords;
  } catch (error) {
    console.error("Error searching the word", error);
  }
};
