export const ASCII85_BASE = 85;
export const ASCII85_CODE_START = 33;
export const ASCII85_CODE_END = ASCII85_CODE_START + ASCII85_BASE;
export const ASCII85_NULL = String.fromCharCode(0);
export const ASCII85_NULL_STRING = ASCII85_NULL + ASCII85_NULL + ASCII85_NULL + ASCII85_NULL;
export const ASCII85_ZERO = 'z';
export const ASCII85_ZERO_VALUE = ASCII85_ZERO.charCodeAt(0);
export const ASCII85_PADDING_VALUE = 'u'.charCodeAt(0);
export const ASCII85_ENCODING_GROUP_LENGTH = 4;
export const ASCII85_DECODING_GROUP_LENGTH = 5;
export const ASCII85_BLOCK_START = '<~';
export const ASCII85_BLOCK_START_LENGTH = ASCII85_BLOCK_START.length;
export const ASCII85_BLOCK_START_VALUE = _BufferFrom(ASCII85_BLOCK_START).readUInt16BE(0);
export const ASCII85_BLOCK_END = '~>';
export const ASCII85_BLOCK_END_LENGTH = ASCII85_BLOCK_END.length;
export const ASCII85_BLOCK_END_VALUE = _BufferFrom(ASCII85_BLOCK_END).readUInt16BE(0);
export const ASCII85_GROUP_SPACE = 'y';
export const ASCII85_GROUP_SPACE_VALUE = ASCII85_GROUP_SPACE.charCodeAt(0);
export const ASCII85_GROUP_SPACE_CODE = 0x20202020;
export const ASCII85_GROUP_SPACE_STRING = '    ';

export const ASCII85_DEFAULT_ENCODING_TABLE = (function() {
  const arr = new Array(ASCII85_BASE);
  let i;

  for (i = 0; i < ASCII85_BASE; i++) {
    arr[i] = String.fromCharCode(ASCII85_CODE_START + i);
  }

  return arr;
})();

export const ASCII85_DEFAULT_DECODING_TABLE = (function() {
  const arr = new Array(1 << 8);
  let i;

  for (i = 0; i < ASCII85_BASE; i++) {
    arr[ASCII85_CODE_START + i] = i;
  }

  return arr;
})();