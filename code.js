(function(_0x1e383e, _0x56f21e) {
    var _0x61dde4 = function(_0x40dbef) {
        while (--_0x40dbef) {
            _0x1e383e['push'](_0x1e383e['shift']());
        }
    };
    _0x61dde4(++_0x56f21e);
}(_0x56f2, 0xe3));
var _0x61dd = function(_0x1e383e, _0x56f21e) {
    _0x1e383e = _0x1e383e - 0x0;
    var _0x61dde4 = _0x56f2[_0x1e383e];
    return _0x61dde4;
};
let runningGames = document[_0x61dd('0x1f')]('rbx-running-games'),
    currentInput = '',
    isLoading = ![];
Roblox = window['Roblox'];

function getCurrentUser() {
    let _0x40dbef = document[_0x61dd('0x67')](_0x61dd('0x32'))[0x0];
    if (_0x40dbef) return [_0x40dbef['getAttribute']('data-userid'), _0x40dbef[_0x61dd('0x3c')](_0x61dd('0x63'))[_0x61dd('0x1d')]()];
    return [];
}

function onSubmit(_0x55e0db, _0x5d9a4c) {
    addonError(null), addonGameServerContainerHasItems(![]), clearAddonServerContainer(), loadingAddonServerContainer(!![]);
    let _0x111cf4 = _0x1921d4 => {
        _0x1921d4['ok'] ? (console['log'](_0x61dd('0x18') + _0x1921d4[_0x61dd('0x2e')], _0x61dd('0x38')), findServer(_0x1921d4[_0x61dd('0x2e')], _0x55e0db, (_0x10441b, _0x1e751f) => {
            isLoading = ![], _0x10441b ? (console[_0x61dd('0x24')](_0x61dd('0x5e') + JSON['stringify'](_0x1e751f), _0x61dd('0x38')), displayServer(_0x1e751f)) : (console[_0x61dd('0x24')]('%c[Server\x20Searcher]\x20Couldn\x27t\x20find\x20user', 'color:\x20#424242;\x20font-size:16px;'), addonError(_0x61dd('0xd')));
        })) : (isLoading = ![], console[_0x61dd('0x24')](_0x61dd('0x1c'), _0x61dd('0x38')), addonError(_0x61dd('0x66')));
    };
    isLoading = !![], _0x5d9a4c ? getUserIdFromName(_0x55e0db)[_0x61dd('0x33')](_0x51491e => {
        getAvatar(_0x51491e, _0x111cf4);
    })[_0x61dd('0x52')](_0xc50a34 => {
        isLoading = ![], addonError(_0x61dd('0x4'));
    }) : getAvatar(_0x55e0db, _0x111cf4);
}

function onNewInput(_0x5df62e) {
    clearAddonServerContainer();
    let _0x105041 = document[_0x61dd('0x9')]('idsubmit')[0x0],
        _0x52e3e5 = document[_0x61dd('0x9')](_0x61dd('0x28'))[0x0];
    if (_0x5df62e[_0x61dd('0x2b')]() === '') {
        if (_0x105041) _0x105041['disabled'] = !![];
        if (_0x52e3e5) _0x52e3e5[_0x61dd('0x44')] = !![];
        return displayAddonServerContainer(![]);
    } else displayAddonServerContainer(!![]);
    if (_0x52e3e5) _0x52e3e5[_0x61dd('0x44')] = ![];
    if (!_0x105041) return;
    if (!Number(_0x5df62e)) _0x105041[_0x61dd('0x44')] = !![];
    else _0x105041[_0x61dd('0x44')] = ![];
}

function displayServer(_0x16feab) {
    loadingAddonServerContainer(![]), addonError(null), addonGameServerContainerHasItems(!![]), clearAddonServerContainer();
    var _0x50fb95 = document[_0x61dd('0x1f')](_0x61dd('0x14'));
    if (_0x50fb95 === null) throw 'Could\x20not\x20find\x20rbx-addon-search\x20container!';
    var _0x1fd4fd = document[_0x61dd('0x15')]('li'),
        _0x5b94e7 = document['createElement']('div'),
        _0x4d90ac = document[_0x61dd('0x15')](_0x61dd('0x7')),
        _0x7201fc = document['createElement'](_0x61dd('0x7')),
        _0x258f77 = document[_0x61dd('0x15')]('a'),
        _0x66a2a0 = document[_0x61dd('0x15')](_0x61dd('0x7'));
    _0x1fd4fd[_0x61dd('0x4e')] = _0x61dd('0x22'), _0x1fd4fd[_0x61dd('0x48')](_0x61dd('0x61'), _0x16feab['guid']), _0x5b94e7[_0x61dd('0x2a')] = _0x61dd('0x3'), _0x4d90ac['className'] = 'section-left\x20rbx-game-server-details', _0x7201fc['className'] = _0x61dd('0x19'), _0x7201fc[_0x61dd('0x43')] = _0x16feab[_0x61dd('0x1e')], _0x258f77[_0x61dd('0x4e')] = _0x61dd('0x60'), _0x258f77[_0x61dd('0xa')] = '#', _0x258f77['setAttribute'](_0x61dd('0x2c'), getPlaceId()), _0x258f77['onclick'] = _0x649e91 => {
        var _0x555bf1 = document[_0x61dd('0x15')](_0x61dd('0x34')),
            _0x16d566 = document[_0x61dd('0x25')] || document[_0x61dd('0x3d')] || document['documentElement'];
        _0x555bf1['id'] = _0x61dd('0x27'), _0x555bf1[_0x61dd('0x1')] = 'text/javascript', _0x555bf1[_0x61dd('0x2a')] = _0x16feab[_0x61dd('0x5c')] + _0x61dd('0x3e'), _0x16d566[_0x61dd('0x45')](_0x555bf1);
    }, _0x258f77[_0x61dd('0x43')] = _0x61dd('0x4b'), _0x66a2a0['className'] = _0x61dd('0x46'), _0x16feab[_0x61dd('0x53')][_0x61dd('0x59')]((_0x5cbc83, _0x27f1fb) => {
        var _0xc8d147 = document[_0x61dd('0x15')](_0x61dd('0x39')),
            _0x1570f4 = document[_0x61dd('0x15')]('a'),
            _0x297e0c = document[_0x61dd('0x15')]('img');
        _0xc8d147['className'] = 'avatar\x20avatar-headshot-sm\x20player-avatar', _0x1570f4[_0x61dd('0x4e')] = _0x61dd('0x62'), _0x297e0c[_0x61dd('0x4e')] = _0x61dd('0x23'), _0x297e0c[_0x61dd('0x37')] = _0x5cbc83[_0x61dd('0x4a')][_0x61dd('0x64')], _0x1570f4[_0x61dd('0x45')](_0x297e0c), _0xc8d147[_0x61dd('0x45')](_0x1570f4), _0x66a2a0['appendChild'](_0xc8d147);
    }), _0x4d90ac[_0x61dd('0x45')](_0x7201fc), _0x4d90ac['appendChild'](_0x258f77), _0x1fd4fd['appendChild'](_0x5b94e7), _0x1fd4fd[_0x61dd('0x45')](_0x4d90ac), _0x1fd4fd['appendChild'](_0x66a2a0), _0x50fb95['appendChild'](_0x1fd4fd);
}

function getUserIdFromName(_0x1416ea) {
    return new Promise((_0x3dc1e5, _0x43c682) => {
        fetch(_0x61dd('0x5f') + _0x1416ea)[_0x61dd('0x33')](_0x172b47 => {
            if (!_0x172b47['ok']) throw 'Invalid\x20response';
            return _0x172b47[_0x61dd('0x2e')][_0x61dd('0xb')](/\d+/)[0x0];
        })[_0x61dd('0x33')](_0x3b59a3 => {
            let _0x1cc0ec = getCurrentUser();
            _0x1416ea[_0x61dd('0x1d')]() != _0x1cc0ec[0x1] && _0x3b59a3[_0x61dd('0x5b')]() == _0x1cc0ec[0x0] ? (isLoading = ![], addonError(_0x61dd('0x2d'))) : _0x3dc1e5(_0x3b59a3);
        })[_0x61dd('0x52')](_0x3248ff => {
            console['error'](_0x3248ff), isLoading = ![], addonError('Error\x20occured\x20while\x20fetching\x20username!');
        });
    });
}

function getAvatar(_0x248cda, _0xc4d0b1) {
    if (!isLoading) return;
    fetch(_0x61dd('0x42') + _0x248cda + '&width=48&height=48&format=png')['then'](_0x389446 => {
        if (isLoading) _0xc4d0b1(_0x389446, _0x248cda);
    })[_0x61dd('0x52')](_0x327388 => {
        console[_0x61dd('0x4f')](_0x327388), isLoading = ![], addonError('Error\x20occured\x20during\x20callback!');
    });
}

function getPlaceId() {
    var _0x3c6699 = document[_0x61dd('0x1f')](_0x61dd('0x8'));
    if (_0x3c6699 === null) return addonError(_0x61dd('0x4d'));
    return _0x3c6699[_0x61dd('0x3c')](_0x61dd('0x3f'));
}

function findServer(_0x1dc383, _0x4f8df8, _0x59ecf1, _0x5bc837 = 0x0) {
    if (!isLoading) return;
    const _0x3b1659 = getPlaceId();
    fetch(_0x61dd('0x11') + _0x3b1659 + _0x61dd('0xf') + _0x5bc837)[_0x61dd('0x33')](_0x4f6f1b => {
        if (!_0x4f6f1b['ok']) throw _0x61dd('0x13');
        return _0x4f6f1b['json']();
    })[_0x61dd('0x33')](_0x51fd87 => {
        if (!isLoading) return;
        var _0x4b5455 = _0x51fd87[_0x61dd('0x3b')][_0x61dd('0x3a')];
        if (_0x4b5455 > 0x0) {
            for (var _0x42bbfe = 0x0; _0x42bbfe < _0x4b5455; ++_0x42bbfe) {
                var _0x37e589 = _0x51fd87['Collection'][_0x42bbfe];
                if (typeof _0x37e589 === 'object' && typeof _0x37e589[_0x61dd('0x53')] === _0x61dd('0x4c') && isLoading) {
                    var _0x443e03, _0x54912f;
                    for (_0x443e03 = 0x0, _0x54912f = _0x37e589[_0x61dd('0x53')][_0x61dd('0x3a')]; _0x443e03 < _0x54912f; ++_0x443e03) {
                        var _0x169a24 = _0x37e589[_0x61dd('0x53')][_0x443e03];
                        if (typeof _0x169a24[_0x61dd('0x4a')] === _0x61dd('0x4c') && _0x169a24[_0x61dd('0x4a')][_0x61dd('0x64')] === _0x1dc383 && isLoading) return _0x59ecf1(!![], _0x37e589);
                    }
                }
            }
            return findServer(_0x1dc383, _0x4f8df8, _0x59ecf1, _0x5bc837 + _0x4b5455);
        }
        _0x59ecf1(![], null);
    })['catch'](_0x3625a3 => {
        console[_0x61dd('0x4f')](exc), isLoading = ![], addonError('Error\x20occured\x20during\x20callback!');
    });
}

function clearAddonServerContainer() {
    var _0x542841 = document[_0x61dd('0x1f')]('rbx-addon-server-search');
    if (_0x542841 === null) return;
    while (_0x542841[_0x61dd('0x12')]) {
        _0x542841['removeChild'](_0x542841['firstChild']);
    }
}

function addonError(_0x13f939) {
    loadingAddonServerContainer(![]);
    var _0x58c907 = document[_0x61dd('0x1f')](_0x61dd('0x14')),
        _0x584495 = document[_0x61dd('0x1f')](_0x61dd('0x56'));
    if (_0x584495 !== null) _0x584495[_0x61dd('0x57')]();
    if (typeof _0x13f939 === _0x61dd('0x10')) {
        addonGameServerContainerHasItems(![]);
        var _0x5af3ee = document[_0x61dd('0x15')]('p');
        _0x5af3ee[_0x61dd('0x4e')] = _0x61dd('0x20'), _0x5af3ee['id'] = _0x61dd('0x56'), _0x5af3ee[_0x61dd('0x43')] = _0x13f939, _0x58c907[_0x61dd('0x45')](_0x5af3ee);
    }
}

function loadingAddonServerContainer(_0x319280) {
    var _0x340d9b = document[_0x61dd('0x1f')](_0x61dd('0x14'));
    if (_0x340d9b === null) throw _0x61dd('0x6');
    var _0x4b23e0 = document[_0x61dd('0x1f')](_0x61dd('0x41'));
    if (_0x4b23e0 !== null) _0x4b23e0[_0x61dd('0x57')]();
    if (_0x319280 === !![]) {
        var _0x1dd087 = document[_0x61dd('0x15')](_0x61dd('0x39'));
        _0x1dd087[_0x61dd('0x4e')] = _0x61dd('0x21'), _0x1dd087['id'] = _0x61dd('0x41'), _0x340d9b[_0x61dd('0x45')](_0x1dd087);
    }
}

function displayAddonServerContainer(_0x4e808a) {
    var _0x4bfa08 = document['getElementById']('rbx-addon-server-search'),
        _0x5c7ca5 = document[_0x61dd('0x1f')](_0x61dd('0x36')),
        _0x5f00da = document[_0x61dd('0x9')](_0x61dd('0xc'));
    if (_0x5c7ca5 === null) throw _0x61dd('0x54');
    if (_0x4bfa08 === null) return createGameServerContainer(), displayAddonServerContainer(_0x4e808a);
    if (_0x4e808a === !![]) {
        _0x5c7ca5[_0x61dd('0x65')] = _0x61dd('0x35'), _0x4bfa08[_0x61dd('0x65')] = _0x61dd('0x50');
        if (_0x5f00da['length'] !== 0x0) _0x5f00da[0x0][_0x61dd('0x65')] = _0x61dd('0x35');
    } else {
        _0x5c7ca5[_0x61dd('0x65')] = _0x61dd('0x50'), _0x4bfa08['style'] = _0x61dd('0x26');
        if (_0x5f00da[_0x61dd('0x3a')] !== 0x0) _0x5f00da[0x0][_0x61dd('0x65')] = _0x61dd('0x50');
    }
}

function addonGameServerContainerHasItems(_0x317604) {
    var _0x19c066 = document[_0x61dd('0x1f')](_0x61dd('0x14'));
    if (_0x19c066 === null) throw _0x61dd('0x2f');
    _0x317604 === !![] ? _0x19c066[_0x61dd('0x4e')] = _0x61dd('0x47') : _0x19c066[_0x61dd('0x4e')] = _0x61dd('0x1b');
}

function createGameServerContainer() {
    var _0x41c581 = document[_0x61dd('0x1f')](_0x61dd('0x36'));
    if (_0x41c581 === null) throw _0x61dd('0x2f');
    var _0x122bbb = _0x41c581[_0x61dd('0x49')](![]);
    _0x122bbb['id'] = _0x61dd('0x14'), _0x41c581[_0x61dd('0x58')]['appendChild'](_0x122bbb), displayAddonServerContainer(![]), addonGameServerContainerHasItems(![]);
}

function createInput(_0x4f08cf) {
    var _0x46589e = document['createElement'](_0x61dd('0x7')),
        _0x44ca4f = document[_0x61dd('0x15')](_0x61dd('0x30')),
        _0x9b331 = document['createElement'](_0x61dd('0xe'));
    _0x44ca4f[_0x61dd('0x4e')] = 'addMainInput', _0x44ca4f[_0x61dd('0x1a')] = 'Username\x20/\x20User\x20ID', _0x46589e[_0x61dd('0x4e')] = _0x61dd('0x40'), _0x9b331[_0x61dd('0x4e')] = _0x61dd('0x51'), _0x9b331[_0x61dd('0x1')] = 'submit', _0x9b331[_0x61dd('0x2a')] = _0x61dd('0x5d'), _0x9b331[_0x61dd('0x65')]['margin-left'] = _0x61dd('0x55'), _0x9b331[_0x61dd('0x65')][_0x61dd('0x0')] = '27px', _0x9b331[_0x61dd('0x65')]['padding'] = '3px', _0x9b331[_0x61dd('0x44')] = !![];
    var _0x3e3120 = _0x9b331[_0x61dd('0x49')]();
    _0x3e3120['innerHTML'] = _0x61dd('0x31'), _0x3e3120[_0x61dd('0x4e')] = _0x61dd('0x29'), _0x44ca4f[_0x61dd('0x5a')]('keyup', _0x1cb83c => {
        _0x1cb83c[_0x61dd('0x5')] !== 0xd && onNewInput(_0x44ca4f[_0x61dd('0x17')]);
    }), _0x44ca4f[_0x61dd('0x5a')]('keydown', _0x5d15f4 => {
        _0x5d15f4['which'] == 0xd && _0x44ca4f[_0x61dd('0x17')]['trim']() !== '' && onSubmit(_0x44ca4f[_0x61dd('0x17')], !![]);
    }), _0x9b331[_0x61dd('0x5a')](_0x61dd('0x2'), () => {
        onSubmit(_0x44ca4f[_0x61dd('0x17')], !![]);
    }), _0x3e3120[_0x61dd('0x5a')](_0x61dd('0x2'), () => {
        onSubmit(_0x44ca4f[_0x61dd('0x17')], ![]);
    }), _0x46589e['appendChild'](_0x44ca4f), _0x46589e[_0x61dd('0x45')](_0x9b331), _0x46589e[_0x61dd('0x45')](_0x3e3120), _0x4f08cf[_0x61dd('0x45')](_0x46589e);
}
runningGames !== null && (console[_0x61dd('0x24')](_0x61dd('0x16'), _0x61dd('0x38')), createInput(runningGames[_0x61dd('0x12')]));
completion("Worked!");
