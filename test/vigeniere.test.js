const assert = require("assert");
const { vigenereEncoder, vigenereDecoder } = require("../src/vigeniere");

describe("Vigenère cipher", function () {
  describe("Encode message", function () {
    it("should encode message correctly", function () {
      const codingWord = "QUEENS";
      const messageToCode = "QUEHAREMOSESTANOCHECEREBRO";
      const expectedEncodedMessage = "GOILNJUGSWRKJURSPZUWIVRTHI";
      const resultingMessage = vigenereEncoder({
        secret: codingWord,
        message: messageToCode,
      });
      assert.equal(resultingMessage, expectedEncodedMessage);
    });

    it("should encode message correctly", function () {
      //TODO try to do it dynamically not in two tests
      const codingWord = "ROSALIA";
      const messageToCode = "BABYNOMELLAMEQUEYOESTOYOCUPAOLVIDANDOTUSMALE";
      const expectedEncodedMessage =
        "SOTYYWMVZDAXMQLSQOPATFMGCFXAFZNIOINUCLUDUACS";
      const resultingMessage = vigenereEncoder({
        secret: codingWord,
        message: messageToCode,
      });
      assert.equal(resultingMessage, expectedEncodedMessage);
    });
  });

  describe("Decode message", function () {
    it("should decode message correctly", function () {
      const codingWord = "KITTY";
      const encodedMessage = "CPHPKOBAXKYVXR";
      const expectedDecodedMessage = "SHOWMETHEMONEY";
      const resultingMessage = vigenereDecoder({
        secret: codingWord,
        encodedMessage,
      });
      assert.equal(resultingMessage, expectedDecodedMessage);
    });
  });
});
