function pad (minLen, item) {
  var out = item

  for (var i = 0; i < minLen - item.length; i++) {
    out += ' '   
  }
  return out
}

module.exports = function sideBySide (space, obj, obj2) {
  var strLines = JSON.stringify(obj, null, 2).split('\n')
  var str2Lines = JSON.stringify(obj2, null, 2).split('\n')
  var longestLineLength = strLines.reduce((p, c) => Math.max(c.length, p), 0) + space
  var out = []

  for (var i = 0; i < Math.max(strLines.length, str2Lines.length); i++) {
    left = strLines[i] !== undefined ? strLines[i] : ''
    right = str2Lines[i] !== undefined ? str2Lines[i] : ''
    out.push(pad(longestLineLength, left) + right)
  }

  return out.join('\n')
}
