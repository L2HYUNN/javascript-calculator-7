class Error {
  static MESSAGE = Object.freeze({
    HAS_NOT_ALLOWED_DELIMITER:
      '[ERROR] 쉼표(,), 콜론(:) 또는 문자열 앞부분의 "//"와 "\\n" 사이에 위치하는 문자만 구분자로 사용할 수 있어요.',
    HAS_NEGATIVE_OR_ZERO_NUMBER: '[ERROR] 음수나 0은 사용할 수 없어요.',
  });
}

export default Error;
