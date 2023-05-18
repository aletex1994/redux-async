import axios from "axios";

export async function translate(targetLanguage, responseToTranslate) {
 const encodedParams = new URLSearchParams();
 encodedParams.set(
  "q",
  responseToTranslate.data.setup +
   "PUNCHLINE:" +
   responseToTranslate.data.punchline
 );
 encodedParams.set("target", targetLanguage);
 encodedParams.set("source", "en");

 const options = {
  method: "POST",
  url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
  headers: {
   "content-type": "application/x-www-form-urlencoded",
   "Accept-Encoding": "application/gzip",
   "X-RapidAPI-Key": "KEY",
   "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
  },
  data: encodedParams,
 };

 try {
  const response = await axios.request(options);
  const translatedText = response.data.data.translations[0].translatedText;
  const translatedParts = translatedText.split("PUNCHLINE:");
  const translatedSetup = translatedParts[0];
  const translatedPunchline = translatedParts[1];
  return {
   setup: translatedSetup,
   punchline: translatedPunchline,
  };
 } catch (error) {
  console.error(error);
  return null;
 }
}
