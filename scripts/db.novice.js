var jsonLeft = [
    [
        { tagName: 'label', name: 'First Name:', for: 'firstName', title: 'First Name' },
        { tagName: 'input', id: 'firstName', type: 'text', autocomplete: 'on', name: 'firstName', maxlength: '50', tabindex: 1, title: 'First Name', pattern: '^[a-zA-Z][a-zA-Z0-9-_\.]{1,50}$', placeholder: 'Enter your first name...', required: 'required' }
    ],
    [
        { tagName: 'label', name: 'Last Name:', for: 'lastName', title: 'Last Name' },
        { tagName: 'input', id: 'lastName', type: 'text', autocomplete: 'on', name: 'lastName', maxlength: '50', tabindex: 2, title: 'Last Name', pattern: '^[a-zA-Z][a-zA-Z0-9-_\.]{1,50}$', placeholder: 'Enter your last name...', required: 'required' }
    ],
    [
        { tagName: 'label', name: 'Middle Name:', for: 'middleName', title: 'Middle Name' },
        { tagName: 'input', id: 'middleName', type: 'text', autocomplete: 'on', name: 'middleName', maxlength: '50', tabindex: 3, title: 'Middle Name', pattern: '^[a-zA-Z][a-zA-Z0-9-_\.]{1,50}$', placeholder: 'Enter your middle name...', required: 'required' }
    ],
    [
        { tagName: 'label', name: 'Password:', for: 'password', title: 'Password' },
        { tagName: 'input', id: 'password', type: 'password', autocomplete: 'on', name: 'password', maxlength: '20', tabindex: 4, title: 'Password', pattern: '(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$', placeholder: 'Enter your password...', required: 'required' }
    ],
    [
        { tagName: 'label', name: 'Confirm Password:', for: 'confPassword', title: 'Confirm Password' },
        { tagName: 'input', id: 'confPassword', type: 'password', autocomplete: 'on', name: 'confPassword', maxlength: '20', tabindex: 5, title: 'Confirm Password', pattern: '(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$', placeholder: 'Confirm your password...', required: 'required' }
    ],
    [
        { tagName: 'button', class: 'save', type: 'submit', title: 'Save', formaction: 'https://www.google.com', name: 'Save' },
        { tagName: 'button', class: 'cancel', type: 'reset', title: 'Cancel', name: 'Cancel' }
    ]

];
var jsonRight = [
    [
        { tagName: 'label', name: 'Phone:', for: 'phone', title: 'Phone' },
        { tagName: 'input', id: 'phone', type: 'text', autocomplete: 'on', name: 'phone', maxlength: '50', tabindex: 6, title: 'First Name', pattern: '[\+]\d{3}[\(]\d{2}[\)]\d{3}[\-]\d{3}', placeholder: 'Enter your phone number...', required: 'required' }
    ],
    [
        { tagName: 'label', name: 'Cell:', for: 'cell', title: 'Cell' },
        { tagName: 'input', id: 'cell', type: 'tel', autocomplete: 'on', name: 'cell', maxlength: '20', tabindex: 7, title: 'Cell', placeholder: 'Enter your cell number...', required: 'required' }
    ],
    [
        { tagName: 'label', name: 'Website:', for: 'website', title: 'Website' },
        { tagName: 'input', id: 'website', type: 'text', autocomplete: 'on', name: 'website', maxlength: '20', tabindex: 8, title: 'Website', pattern: 'https?://.+', placeholder: 'Enter your URL...', required: 'required' }
    ],
    [
        { tagName: 'label', name: 'Email:', for: 'email', title: 'Email' },
        { tagName: 'input', id: 'email', type: 'email', autocomplete: 'on', name: 'email', maxlength: '20', tabindex: 9, title: 'Password', pattern: '^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$', placeholder: 'Enter your EMail...', required: 'required' }
    ],
    [
        { tagName: 'label', name: 'Age:', for: 'age', title: 'Age' },
        { tagName: 'input', id: 'age', 'class': 'age', type: 'number', autocomplete: 'on', name: 'age', maxlength: '3', min: '1', max: '110', tabindex: 10, title: 'Age', placeholder: 'Age...', required: 'required' }
    ],
    [
        { tagName: 'button', class: 'save', type: 'submit', title: 'Save', formaction: 'http://www.w3schools.com/', name: 'Save' },
        { tagName: 'button', class: 'cancel', type: 'reset', title: 'Cancel', name: 'Cancel' }
    ]
];