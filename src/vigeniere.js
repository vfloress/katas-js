const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const vigenereDecoder = ({ secret, encodedMessage }) => {
  const constructedSecret = generateContructedSecret({
    secret,
    message: encodedMessage,
  });

  const decodedMessage = generateDecodedMessage({
    encodedMessage,
    constructedSecret,
  });
  return decodedMessage;
};

const vigenereEncoder = ({ secret, message }) => {
  const constructedSecret = generateContructedSecret({ secret, message });
  const encodedMessage = generateEncodedMessage({ message, constructedSecret });

  return encodedMessage;
};

const generateDecodedMessage = ({ encodedMessage, constructedSecret }) => {
  return constructedSecret
    .split("")
    .map((secretLetter, i) => {
      const alphByLetter = generateAplphabetArrayByLetter(secretLetter);
      const letterIndex = alphByLetter.indexOf(encodedMessage[i]);
      return alphabet[letterIndex];
    })
    .join("");
};

const generateEncodedMessage = ({ message, constructedSecret }) => {
  const encodedMessage = message
    .split("")
    .map((messageLetter, i) => {
      const topIndex = searchAlphabetLetterIndex(messageLetter);
      const constructedSecretLetter = constructedSecret[i];
      const alphByLetter = generateAplphabetArrayByLetter(
        constructedSecretLetter
      );
      const encodedMessageLetter = alphByLetter[topIndex];
      return encodedMessageLetter;
    })
    .join("");
  return encodedMessage;
};

const searchAlphabetLetterIndex = (letter) => {
  return alphabet.indexOf(letter);
};

const generateAplphabetArrayByLetter = (letter) => {
  return alphabet.map((_, i) => {
    const index = searchAlphabetLetterIndex(letter);
    if (i + index < alphabet.length) {
      return alphabet[i + index];
    } else {
      return alphabet[i + index - alphabet.length];
    }
  });
};

const generateContructedSecret = ({ secret, message }) => {
  const secretLength = secret.length;
  const constructedSecret = message
    .split("")
    .map((_, i) => {
      if (i < secretLength) {
        return secret[i];
      } else {
        return secret[i - secretLength * Math.floor(i / secretLength)];
      }
    })
    .join("");
  return constructedSecret;
};

module.exports = { vigenereEncoder, vigenereDecoder };
