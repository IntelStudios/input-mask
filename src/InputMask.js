import createTextMaskInputElement from 'text-mask-core/src/createTextMaskInputElement'
import emailMask from 'text-mask-addons/src/emailMask';
import * as IBAN from 'iban';


function createValidationRegex(xeeloMask) {
    const ret = [];
    let isFixed = false;
    let hadFirstNumber = xeeloMask.match(/^[#\.\,9]+$/) === null; // allow negative numbers in "pure numeric" masks
    for (var i = 0; i < xeeloMask.length; i++) {
        const char = xeeloMask[i];
        if (char === '[') {
            isFixed = true;
            continue;
        }
        if (char === ']') {
            isFixed = false;
            continue;
        }
        if (isFixed) {
            ret.push(char);
            continue;
        }

        if (char === '9') {
            if (!hadFirstNumber) {
                hadFirstNumber = true;
                ret.push('-?');
            }
            ret.push('\\d');
            continue;
        }
        if (char === '#') {
            if (!hadFirstNumber) {
                hadFirstNumber = true;
                ret.push('-?');
            }
            ret.push('\\d?');
            continue;
        }
        if (char === 'a') {
            ret.push('[a-z]');
            continue;
        }
        if (char === 'b') {
            ret.push('[a-z]?');
            continue;
        }
        if (char === 'A') {
            ret.push('[A-Z]');
            continue;
        }
        if (char === 'B') {
            ret.push('[A-Z]?');
            continue;
        }
        if (char === 'w') {
            ret.push('[a-z]|[A-Z]|[0-9]');
            continue;

        }
        if (char === 'x') {
            ret.push('([a-z]|[A-Z]|[0-9])?');
            continue;
        }
        if (char === '*') {
            ret.push('.+');
            continue;
        }
        if (char === '%') {
            ret.push('.?');
            continue;
        }

        ret.push(char);
    }
    const re = new RegExp(`^${ret.join('')}$`);
    return re;
}


function transformMask(xeeloMask) {

    const re = createValidationRegex(xeeloMask);

    const config = {
        mask: false,
        guide: false,
        placeholderChar: '_',
        pipe: undefined,
        keepCharPositions: false,
        validate: function(value) {
            return re.test(value);
        }
    };

    config.mask = function(rawValue, config) {
        const position = config.currentCarretPosition;

        const hasOptionalChars = xeeloMask.match(/[#bBx%]+/) !== null;

        const ret = [];
        let isFixed = false;
        let hadFirstNumber = xeeloMask.match(/^[#\.\,9]+$/) === null; // allow negative numbers in "pure numeric" masks
        for (var i = 0; i < xeeloMask.length; i++) {
            const char = xeeloMask[i];
            if (char === '[') {
                isFixed = true;
                continue;
            }
            if (char === ']') {
                ret.push('[]');
                isFixed = false;
                continue;
            }
            if (isFixed) {
                ret.push(char);
                continue;
            }

            if (char === '9') {
                if (!hadFirstNumber) {
                    hadFirstNumber = true;
                    if (rawValue.length === 0) {
                        ret.push(/-|\d/);
                    } else if (rawValue[0] === '-') {
                        ret.push('-');
                    }
                }
                ret.push(/\d/);
                continue;
            }
            if (char === '#') {
                if (!hadFirstNumber) {
                    hadFirstNumber = true;
                    if (rawValue.length === 0) {
                        ret.push(/-|\d/);
                    } else if (rawValue[0] === '-') {
                        ret.push('-');
                    }
                }
                ret.push(/\d/);
                continue;
            }
            if (char === 'a') {
                ret.push(/[a-z]/);
                continue;
            }
            if (char === 'b') {
                ret.push(/[a-z]/);
                continue;
            }
            if (char === 'A') {
                ret.push(/[A-Z]/);
                continue;
            }
            if (char === 'B') {
                ret.push(/[A-Z]/);
                continue;
            }
            if (char === 'w') {
                ret.push(/[a-z]|[A-Z]|[0-9]/);
                continue;

            }
            if (char === 'x') {
                ret.push(/([a-z]|[A-Z]|[0-9])/);
                continue;
            }
            if (char === '*') {
                ret.push(/.+/);
                continue;
            }
            if (char === '%') {
                ret.push(/.+/);
                continue;
            }

            ret.push(char);
        }
        return ret;
    };
    return config;
}

export function createTextMaskConfig(inputMask) {
    if (inputMask === 'email') {
        const config = Object.assign({
            mask: false,
            guide: false,
            placeholderChar: '_',
            pipe: undefined,
            keepCharPositions: false,
            validate: function(value) {
                const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(value).toLowerCase());
            }
        }, emailMask);
        return config;
    }

    if (inputMask === 'iban') {
        const config = {
            mask: false,
            guide: false,
            placeholderChar: '_',
            pipe: undefined,
            keepCharPositions: false,
            validate: function(value) {
                return IBAN.isValid(value);
            }
        };
        return config;
    }

    return transformMask(inputMask);
}


export function inputMask(mask) {
    const { inputElement } = createTextMaskConfig(mask)
    const textMaskInputElement = createTextMaskInputElement(textMaskConfig)
    const inputHandler = ({ target: { value } }) => textMaskInputElement.update(value)

    inputElement.addEventListener('input', inputHandler)

    textMaskInputElement.update(inputElement.value)

    return {
        textMaskInputElement,

        destroy() {
            inputElement.removeEventListener('input', inputHandler)
        }
    }
}

export default inputMask;
export { default as createTextMaskInputElement } from 'text-mask-core/src/createTextMaskInputElement.js';
export { default as conformToMask } from 'text-mask-core/src/conformToMask.js';
