import './constants.js';

export const _BufferFrom = Buffer.from || function(data) {
    return Uint8Array.from;
};
export const _BufferAlloc = Buffer.alloc || function(size, fill, encoding) {
  const buf = new Uint8Array(size);
  if (fill !== undefined) {
    if (typeof encoding === "string") {
      buf.fill(fill, encoding);
    } else {
      buf.fill(fill);
    }
  }
  return buf;
};
export const _BufferAllocUnsafe = function(size) {
  return new _NewUint8Array(size);
};
export const _NewUint8Array = (function() {
  if (typeof Uint8Array === 'undefined') {
    return function(size) {
      return new Array(size);
    };
  } else {
    return function(size) {
      return new Uint8Array(size);
    }
  }
})();