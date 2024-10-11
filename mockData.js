// mockData.js

export const mockCountries = [
    { code: 'US', name: 'United States' },
    { code: 'CA', name: 'Canada' },
    { code: 'MX', name: 'Mexico' },
];

export const mockStates = {
    US: [
        { code: 'CA', name: 'California' },
        { code: 'NY', name: 'New York' },
    ],
    CA: [
        { code: 'ON', name: 'Ontario' },
        { code: 'QC', name: 'Quebec' },
    ],
};

export const mockLanguages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
];

export const messages = { // Ensure this is exported
    'account.settings.field.country.options.empty': { id: 'empty', defaultMessage: 'Select a country' },
    'account.settings.field.state.options.empty': { id: 'empty', defaultMessage: 'Select a state' },
    'account.settings.field.language_proficiencies.options.empty': { id: 'empty', defaultMessage: 'Select a language' },
    'account.settings.field.year_of_birth.options.empty': { id: 'empty', defaultMessage: 'Select a year of birth' },
    'account.settings.field.education.levels.empty': { id: 'empty', defaultMessage: 'Select education level' },
    'account.settings.field.gender.options.empty': { id: 'empty', defaultMessage: 'Select gender' },
    'account.settings.field.work.experience.options.empty': { id: 'empty', defaultMessage: 'Select work experience' },
};

// Example constants
export const YEAR_OF_BIRTH_OPTIONS = ['1990', '1991', '1992']; 
export const EDUCATION_LEVELS = ['highschool', 'bachelor', 'master'];
export const GENDER_OPTIONS = ['male', 'female', 'non-binary'];
export const WORK_EXPERIENCE_OPTIONS = ['', 'less than 1 year', '1-3 years', '3-5 years', '5+ years'];
