import {test} from 'tap';

import * as SB1 from '../../index';

test('spec', t => {
    t.type(SB1, Object);
    t.type(SB1.SB1File, Function);
    t.type(SB1.AssertionError, Function);
    t.type(SB1.ValidationError, Function);
    t.end();
});
