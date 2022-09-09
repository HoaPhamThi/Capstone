import React, { forwardRef, useEffect, useState } from 'react';
import Autosuggest from 'react-autosuggest';

import { validateHelper } from '@utils/helpers';

const Input = forwardRef((props, ref) => {
    const {
        name,
        id,
        disabled,
        type,
        className,
        formClassName,
        value,
        fontSize,
        placeholder,
        rows,
        maxLength,
        min,
        max,
        onChange,
        onPress,
        onBlur,
        onFocus,
        onSelectSuggest,
        onEndTyping,
        onSubmit,
        isSuggest,
        isFormFlex,
        suggestions,
    } = props;
    const [state, setState] = useState({
        isSelectSuggest: false,
        isTyping: false,
        typingTimer: 1000,
        suggestionElement: undefined,
        suggestionInputElement: undefined,
    });
    const { suggestionElement, suggestionInputElement, isSelectSuggest, isTyping, typingTimer } = state;

    useEffect(() => {
        if (isSuggest) {
            const suggestionElement = document?.querySelector(`#${id}`);
            const suggestionInputElement = suggestionElement?.querySelector('input');

            if (suggestionInputElement) {
                suggestionInputElement.onfocus = () => {
                    suggestionElement?.classList.add('bases__border--link');
                };
                suggestionInputElement.onkeydown = (event) => {
                    if (event.code !== 'ArrowUp' && event.code !== 'ArrowDown' && event.code !== 'Enter') {
                        handleOnTyping();
                    }
                };
            }

            setState((prevState) => ({
                ...prevState,
                suggestionElement,
                suggestionInputElement,
            }));
        }
    }, []);

    useEffect(() => {
        if (!value && isSelectSuggest) {
            if (suggestionInputElement) {
                suggestionInputElement.focus();
            }

            setState((prevState) => ({
                ...prevState,
                isSelectSuggest: false,
            }));
        }
    }, [value]);

    useEffect(() => {
        if (!isTyping && typingTimer < 1000) {
            setTimeout(() => {
                setState((prevState) => ({
                    ...prevState,
                    typingTimer: typingTimer <= 0 ? 1000 : typingTimer - 100,
                }));
            }, 100);

            if (typingTimer === 0 && onEndTyping) {
                onEndTyping(value?.toString() ?? '');
            }
        }
    }, [typingTimer]);

    useEffect(() => {
        if (isTyping) {
            setTimeout(() => {
                setState((prevState) => ({
                    ...prevState,
                    isTyping: false,
                    typingTimer: 900,
                }));
            }, 100);
        }
    }, [isTyping]);

    const handleSubmitSuggestion = (event) => {
        event.preventDefault();
        if (suggestionElement && suggestionInputElement) {
            const suggestionHightlightElement = suggestionElement?.querySelector('.react-autosuggest__suggestion--highlighted div');
            const suggestionHightlightText = suggestionHightlightElement?.textContent;
            handleSelectSuggest(suggestionHightlightText ? suggestionHightlightText : suggestionInputElement?.value ?? '', true);
        }
    };

    const handleSubmitInput = (event) => {
        event.preventDefault();
        if (onSubmit) {
            onSubmit();
            const inputs = document?.querySelectorAll('input');
            inputs.forEach((input) => {
                input.blur();
            });
        }
    };

    const handleOnChange = (eventValue) => {
        const eventValueTrim = eventValue.trim();
        if (type === 'number') {
            if (eventValueTrim === '' || !validateHelper.isNumber(eventValueTrim)) {
                eventValue = '';
            } else {
                if (parseInt(eventValueTrim ?? 0) < (min ?? 0) || parseInt(eventValueTrim ?? 0) > (max ?? 0)) {
                    eventValue = value?.toString() ?? '';
                }
            }
        } else {
            if (eventValueTrim.length > (maxLength ?? 0)) {
                eventValue = value?.toString().substring(0, maxLength) ?? '';
            }
        }

        if (onChange) {
            onChange(eventValue);
        }
    };

    const handleSelectSuggest = (eventValue, isSubmit = false) => {
        if (onSelectSuggest) {
            onSelectSuggest(eventValue);
            if (suggestionInputElement && isSubmit) {
                suggestionInputElement.blur();
            }

            setState((prevState) => ({
                ...prevState,
                isSelectSuggest: true,
            }));
        }
    };

    const handleOnTyping = () => {
        setState((prevState) => ({
            ...prevState,
            isTyping: true,
        }));
    };

    const handleOutFocus = (eventValue) => {
        eventValue = eventValue.trim();
        if (onChange) {
            onChange(eventValue);
        }
        if (onBlur) {
            onBlur(eventValue);
        }
    };

    if (isSuggest) {
        const renderSuggestion = (suggestion) => <div>{suggestion}</div>;

        return (
            <div id={id} className={`components__input bases__font--${fontSize} ${className}`}>
                <form className="flex-grow-1" onSubmit={(event) => handleSubmitSuggestion(event)}>
                    <Autosuggest
                        onSuggestionsFetchRequested={(_suggestion) => {}}
                        onSuggestionsClearRequested={() => {}}
                        suggestions={suggestions ?? []}
                        getSuggestionValue={(suggestion) => suggestion ?? ''}
                        renderSuggestion={(suggestion) => renderSuggestion(suggestion)}
                        onSuggestionSelected={(_event, data) => handleSelectSuggest(data.suggestionValue ?? '')}
                        inputProps={{
                            placeholder: placeholder ?? '',
                            value: value?.toString() ?? '',
                            onChange: (_event, params) => handleOnChange(params.newValue),
                            onBlur: () => {
                                handleOutFocus(value?.toString() ?? '');
                                suggestionElement?.classList.remove('bases__border--link');
                            },
                        }}
                    />
                </form>
            </div>
        );
    } else {
        if (type === 'textarea') {
            return (
                <textarea
                    rows={rows}
                    ref={ref}
                    id={id}
                    name={name}
                    disabled={disabled}
                    className={`components__input bases__font--${fontSize} ${className}`}
                    autoComplete="new-password"
                    placeholder={placeholder}
                    onBlur={(event) => handleOutFocus(event.target.value)}
                    onInput={(event) => handleOnChange(event.target.value)}
                    onKeyPress={(event) => (onPress ? onPress(event) : {})}
                    onKeyDown={() => handleOnTyping()}
                    onFocus={(event) => (onFocus ? onFocus(event) : {})}
                    value={value}
                />
            );
        }

        return (
            <form className={`${isFormFlex ? 'flex-grow-1' : ''} ${formClassName}`} onSubmit={(event) => handleSubmitInput(event)}>
                <input
                    type={type}
                    ref={ref}
                    id={id}
                    name={name}
                    disabled={disabled}
                    className={`components__input bases__font--${fontSize} ${className}`}
                    onBlur={(event) => handleOutFocus(event.target.value)}
                    onInput={(event) => handleOnChange(event.target.value)}
                    onKeyDown={(event) => {
                        handleOnTyping();
                        let checkIfNum = false;
                        if (event.key !== undefined && type === 'number') {
                            checkIfNum = event.key === 'e' || event.key === '.' || event.key === '+' || event.key === '-';
                        }
                        return checkIfNum && event.preventDefault();
                    }}
                    onKeyPress={(event) => (onPress ? onPress(event) : {})}
                    onFocus={(event) => (onFocus ? onFocus(event) : {})}
                    autoComplete="new-password"
                    placeholder={placeholder}
                    value={value}
                />
            </form>
        );
    }
});

Input.defaultProps = {
    type: 'text',
    placeholder: '',
    className: '',
    formClassName: '',
    fontSize: '16',
    readOnly: false,
    disabled: false,
    value: '',
    rows: 7,
    maxLength: 255,
    min: 0,
    max: 9999,
    isFormFlex: true,
};

export default Input;
