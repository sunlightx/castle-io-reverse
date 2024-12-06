const crypto = require('crypto');

const getLuValue = () => {
  const randomUUID = crypto.randomUUID();
  return randomUUID.replace(/-/g, '')
}


let fingerHash1 = `9f6fdb3216f2698031547436597a723157467a78724a436837577a4d5a7a5931724870615075644e43a770600ecb4c89ab8b58577baf8529ff2fa7f26431251ffe243808fb4a561cff31683b78af3c24fb3f1504ca3f0616b8db3853fd5267d558783d6e6c2d3043f32f477bfe5f6abf668ae7273264d9acd6d2a416df1b14933218e64b9568b250f58a7558f5c2cace08386e8aaddf91e2438ae6a926116bdd9db203c3d94f49c8d685d112972a3848d0bc447fda3bb8803f1cd7cbe47e48fe309af1223954822f88012892b735f1abff3491ac3cbc0c696dd0c1e758ff5414679b9310b5a93552882c3f97ffbb30171f457ec232d03080ab49c3f44112a6fb0b7bb913481c1d0ae1ef8fb51e57df3e5372ab4cf00ac34cac8c988203ee80078e02ca3f03b8655243b2bf96946d17c80cfc8887495aed4f2c0a042ee904105a5e9c303d675094bab42f4b3fe18b2c8d26c1a4bb7311a1cef7ccc025565040e427a11cb3f72f8d3d3a9e3ad7fffc39c16d0bdf1c142ccf42a5c9d151008d5292fc2f340cb200ccacf05c67f097325e2d2e6eac41eb3b9a27c2662021202ed131f527f33dd53d1bfa49280d1ca82b3679af40331aff5eb712f80da9b3ff2f381c4b2b4a69ff2f871efde83e9eff78da01fe0a0a1cfc2f381c9d2f381cff2f381cff2f381cff2f381cff2f381cff2f381cff2f381cff2f381cff2f385cbf6f785cbf2f381cff2f381cff2f381cff6fe9d6ff2f381cff2f551cff2f381700` // finger hash

let fingerHash2 = `17faad0ab3aa698031547436597a723157467a78724a436837577a4d5a7a5931724870615075644e43a770600ecb4c89ab8b58577baf8529448a3619da6af6e12ddaebf628b485e22ccfbbc5ab51efda28c1c6fa19c1d5e86b25ebad2eacb42b8b86ee90bfd3e3bd20d194852da19f6766a8908ff9e84571cf8988f2076fe60aa3558754389eb0fa81e6623217f3c447e1604ac3d338b788367a5784defaf329e0a17dee5700873582aff0937a2f4876a02567195ba59bdbb954d00edb98368c37a835bd5bf6e71faa33d85e683dfe71737c5faa0a6d5ad93c17df8dd45b87ea1b17632bbd8c6b395bd2ec692c45e3e748d9369a006a5a7e788cacd3a51ac2330174b01f572d9e297ecd106cc3c4661c1166f03a64ead8f6d1b32f2265467c51efe08db596b90a1332d35275b16077904637404e4819f12a3abc88c9e8f6d8d6bf074554a8b1b252fde3cef4a175ffec34f4bec123ff9a0b921c742e1357bd7796e0844d24d15ec3e960e9292c02ea3fbef50ce2c7d21cbc763702afd37381722fd1e7f233e1c0ed4e29cd62d90dd82e4f28058e38c5ad7f6eae315bcb22909d0cf17a90dffacad2dd77dee27bd5e5877cbee0e42ca064ec2bf37a7d2f03d20e1c76eef683d1ebe22c65ef9059d1eb5d2ed32ce4aed1bc0031d0cee92c83ebe23151eb6c2c562de040022de02cd187f0ff17eae22ccef9f7ac17e98e39512de040582de040512de040c4f2b42e57d4b42ec46eddab17e98eac17e98e39022de02cd187f7ff17e9e22cbdfe6569c06be34e61eb492cd143552c012f50a010ebe22c79eb532cd1eb586c6babac629152e22cd1eba26c91aba26c81abb26c81ab5a94b58fa16f02b3b2e9d1ede228d17bef2cd1ebe9d3` // finger hash

let Ur = function(n) {
  return me(n.match(/.{2}/g) || [], (function(n) {
      return parseInt(n, 16) & 255
  }
  ))
}

let me = (n, t) => {
  for (var e = [], r = 0, i = n; r < i.length; r++) {
      var o = i[r];
      e.push(t(o))
  }
  return e
}

let Gr = (n) => {
  for (var t = [], e = 0; e < Math.ceil(n.length / 4); e++)
      t.push(((n[4 * e] || 0) | (n[4 * e + 1] || 0) << 8 | (n[4 * e + 2] || 0) << 16 | (n[4 * e + 3] || 0) << 24) >>> 0);
  return t
}

let Fi = (n) => {
  return (n[0] >>> 0) + (n[1] >>> 0) + (n[2] >>> 0)
};

let Vr = (n) => {
  for (var t = [], e = 0; e < n.length; e++) {
      var r = n[e] >>> 0;
      t.push(255 & r, r >> 8 & 255, r >> 16 & 255, r >> 24 & 255)
  }
  return t
}

let Di = (n, t) => {
  var e = Gr(n)
    , r = e.length - 1;
  if (!(r < 1))
      for (var i, o, u = 0, a = e[r], c = e[0], s = ~~(6 + 52 / (r + 1)); s-- > 0; ) {
          for (i = (u = u + Fi([2650800128, 3633152, 2489]) >>> 0) >>> 2 & 3,
          o = 0; o < r; o++)
              c = e[o + 1],
              a = e[o] = e[o] + ((a >>> 5 ^ c << 2) + (c >>> 3 ^ a << 4) ^ (u ^ c) + (t[3 & o ^ i] ^ a)) >>> 0;
          c = e[0],
          a = e[r] = e[r] + ((a >>> 5 ^ c << 2) + (c >>> 3 ^ a << 4) ^ (u ^ c) + (t[3 & o ^ i] ^ a)) >>> 0
      }
  return e
}

let uintArr = (n) => {
  return [n.length, Vr(Di(n, [1164413191, 3891440048, 185273099, 2746598870]))]
}

let Ce = (n) => {
  return ze('0b', Ar(n[1].length - n[0]), Br(n[1]))
}

let ze = (...args) => {
  var e = function(n, t) {
      return n + t
  }
  
  var r = function(n, t, i) {
    var o;
    return t === i 
      ? n[t]
      : e(r(n, t, o = ~~((t + i) / 2)), r(n, o + 1, i))
  };

  return r(args, 0, args.length - 1);
}

let Ar = (n) => {
  return ("0" + (n & 255).toString(16)).slice(-2)
}

let _e = (n, t, e) => {
  for (var r = e, i = 0, o = 0, u = n; o < u.length; o++)
    r = t(r, u[o], i),
    i++;
  return r
}


let Ir = (n) => {
  return Math.random() * n | 0
}

let Dr = (n) => {
  return _e(n.match(/.{2}/g) || [], (function(n, t) {
      return ze(n, String.fromCharCode(parseInt(t, 16) & 255))
  }
  ), '')
}

let ol = (t) => {
  var e = btoa(t);
  return null == e ? null : e.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
}


let Le = (n,t) => {
  return n.charAt(t)
}

let Wr = (n, t) => {
  var e = 0;
  return _e(n.split(""), (function(n, r) {
      var i = parseInt(r, 16) ^ parseInt(Le(t, e), 16);
      return e = (e + 1) % t.length,
      ze(n, i.toString(16))
  }
  ), "")
}


let Br = (n) => {
  return _e(n, (function(n, t) {
      return ze(n, Ar(t))
  }
  ), "")
}


let Bo = Ar(Ir(255 + 1))

let c = Ce(uintArr(Ur(fingerHash2)))

let createCastleToken = (t) => {
  return {
    Lu: getLuValue(),
    Hu: ol(Dr(ze(Bo, Wr(ze(t, Ar(t.length)), Bo))))
  }
}

console.log('X-Castle-Request-Token: ' + createCastleToken(c).Hu)