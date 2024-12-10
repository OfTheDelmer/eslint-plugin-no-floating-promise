/**
 * Source code:
 * const foo = async () => { return null; }; foo();
 */

exports.parse = () => ({
    type: 'Program',
    start: 0,
    end: 44,
    loc: {
        start: {
            line: 1,
            column: 0
        },
        end: {
            line: 1,
            column: 44
        }
    },
    range: [0, 44],
    comments: [],
    tokens: [
        {
            type: 'Keyword',
            value: 'const',
            start: 0,
            end: 5,
            loc: {
                start: {
                    line: 1,
                    column: 0
                },
                end: {
                    line: 1,
                    column: 5
                }
            },
            range: [0, 5]
        },
        {
            type: 'Identifier',
            value: 'foo',
            start: 6,
            end: 9,
            loc: {
                start: {
                    line: 1,
                    column: 6
                },
                end: {
                    line: 1,
                    column: 9
                }
            },
            range: [6, 9]
        },
        {
            type: 'Punctuator',
            value: '=',
            start: 10,
            end: 11,
            loc: {
                start: {
                    line: 1,
                    column: 10
                },
                end: {
                    line: 1,
                    column: 11
                }
            },
            range: [10, 11]
        },
        {
            type: 'Identifier',
            value: 'async',
            start: 12,
            end: 17,
            loc: {
                start: {
                    line: 1,
                    column: 12
                },
                end: {
                    line: 1,
                    column: 17
                }
            },
            range: [12, 17]
        },
        {
            type: 'Punctuator',
            value: '(',
            start: 18,
            end: 19,
            loc: {
                start: {
                    line: 1,
                    column: 18
                },
                end: {
                    line: 1,
                    column: 19
                }
            },
            range: [18, 19]
        },
        {
            type: 'Punctuator',
            value: ')',
            start: 19,
            end: 20,
            loc: {
                start: {
                    line: 1,
                    column: 19
                },
                end: {
                    line: 1,
                    column: 20
                }
            },
            range: [19, 20]
        },
        {
            type: 'Punctuator',
            value: '=>',
            start: 21,
            end: 23,
            loc: {
                start: {
                    line: 1,
                    column: 21
                },
                end: {
                    line: 1,
                    column: 23
                }
            },
            range: [21, 23]
        },
        {
            type: 'Punctuator',
            value: '{',
            start: 24,
            end: 25,
            loc: {
                start: {
                    line: 1,
                    column: 24
                },
                end: {
                    line: 1,
                    column: 25
                }
            },
            range: [24, 25]
        },
        {
            type: 'Keyword',
            value: 'return',
            start: 26,
            end: 32,
            loc: {
                start: {
                    line: 1,
                    column: 26
                },
                end: {
                    line: 1,
                    column: 32
                }
            },
            range: [26, 32]
        },
        {
            type: 'Null',
            value: 'null',
            start: 33,
            end: 37,
            loc: {
                start: {
                    line: 1,
                    column: 33
                },
                end: {
                    line: 1,
                    column: 37
                }
            },
            range: [33, 37]
        },
        {
            type: 'Punctuator',
            value: ';',
            start: 37,
            end: 38,
            loc: {
                start: {
                    line: 1,
                    column: 37
                },
                end: {
                    line: 1,
                    column: 38
                }
            },
            range: [37, 38]
        },
        {
            type: 'Punctuator',
            value: '}',
            start: 39,
            end: 40,
            loc: {
                start: {
                    line: 1,
                    column: 39
                },
                end: {
                    line: 1,
                    column: 40
                }
            },
            range: [39, 40]
        },
        {
            type: 'Punctuator',
            value: ';',
            start: 40,
            end: 41,
            loc: {
                start: {
                    line: 1,
                    column: 40
                },
                end: {
                    line: 1,
                    column: 41
                }
            },
            range: [40, 41]
        },
        {
            type: 'Identifier',
            value: 'foo',
            start: 42,
            end: 45,
            loc: {
                start: {
                    line: 1,
                    column: 42
                },
                end: {
                    line: 1,
                    column: 45
                }
            },
            range: [42, 45]
        },
        {
            type: 'Punctuator',
            value: '(',
            start: 45,
            end: 46,
            loc: {
                start: {
                    line: 1,
                    column: 45
                },
                end: {
                    line: 1,
                    column: 46
                }
            },
            range: [45, 46]
        },
        {
            type: 'Punctuator',
            value: ')',
            start: 46,
            end: 47,
            loc: {
                start: {
                    line: 1,
                    column: 46
                },
                end: {
                    line: 1,
                    column: 47
                }
            },
            range: [46, 47]
        },
        {
            type: 'Punctuator',
            value: ';',
            start: 47,
            end: 48,
            loc: {
                start: {
                    line: 1,
                    column: 47
                },
                end: {
                    line: 1,
                    column: 48
                }
            },
            range: [47, 48]
        }
    ],
    sourceType: 'module',
    body: [
        {
            type: 'VariableDeclaration',
            start: 0,
            end: 40,
            loc: {
                start: {
                    line: 1,
                    column: 0
                },
                end: {
                    line: 1,
                    column: 40
                }
            },
            range: [0, 40],
            declarations: [
                {
                    type: 'VariableDeclarator',
                    start: 6,
                    end: 39,
                    loc: {
                        start: {
                            line: 1,
                            column: 6
                        },
                        end: {
                            line: 1,
                            column: 39
                        }
                    },
                    range: [6, 39],
                    id: {
                        type: 'Identifier',
                        start: 6,
                        end: 9,
                        loc: {
                            start: {
                                line: 1,
                                column: 6
                            },
                            end: {
                                line: 1,
                                column: 9
                            }
                        },
                        range: [6, 9],
                        name: 'foo',
                        _babelType: 'Identifier'
                    },
                    init: {
                        type: 'ArrowFunctionExpression',
                        start: 12,
                        end: 39,
                        loc: {
                            start: {
                                line: 1,
                                column: 12
                            },
                            end: {
                                line: 1,
                                column: 39
                            }
                        },
                        range: [12, 39],
                        id: null,
                        generator: false,
                        async: true,
                        expression: false,
                        params: [],
                        body: {
                            type: 'BlockStatement',
                            start: 24,
                            end: 39,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 24
                                },
                                end: {
                                    line: 1,
                                    column: 39
                                }
                            },
                            range: [24, 39],
                            body: [
                                {
                                    type: 'ReturnStatement',
                                    start: 26,
                                    end: 38,
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 26
                                        },
                                        end: {
                                            line: 1,
                                            column: 38
                                        }
                                    },
                                    range: [26, 38],
                                    argument: {
                                        type: 'Literal',
                                        start: 33,
                                        end: 37,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 33
                                            },
                                            end: {
                                                line: 1,
                                                column: 37
                                            }
                                        },
                                        range: [33, 37],
                                        value: null,
                                        raw: 'null',
                                        _babelType: 'Literal'
                                    },
                                    _babelType: 'ReturnStatement'
                                }
                            ]
                        },
                        _babelType: 'ArrowFunctionExpression'
                    }
                }
            ],
            kind: 'const',
            _babelType: 'VariableDeclaration'
        },
        {
            type: 'ExpressionStatement',
            start: 42,
            end: 48,
            loc: {
                start: {
                    line: 1,
                    column: 42
                },
                end: {
                    line: 1,
                    column: 48
                }
            },
            range: [42, 48],
            expression: {
                type: 'CallExpression',
                start: 42,
                end: 47,
                loc: {
                    start: {
                        line: 1,
                        column: 42
                    },
                    end: {
                        line: 1,
                        column: 47
                    }
                },
                range: [42, 47],
                callee: {
                    type: 'Identifier',
                    start: 42,
                    end: 45,
                    loc: {
                        start: {
                            line: 1,
                            column: 42
                        },
                        end: {
                            line: 1,
                            column: 45
                        }
                    },
                    range: [42, 45],
                    name: 'foo',
                    _babelType: 'Identifier'
                },
                arguments: [],
                _babelType: 'CallExpression'
            },
            _babelType: 'ExpressionStatement'
        }
    ]
});