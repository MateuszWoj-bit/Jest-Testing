import memoize from 'memoize-one';
import * as mockData from './mockData.js'; // Adjust the path accordingly

const getLocalizedOptions = memoize((locale, country, intl) => {
  const emptyCountryOption = {
    value: '',
    label: intl.formatMessage(mockData.messages['account.settings.field.country.options.empty']),
  };

  const countryOptions = [emptyCountryOption]
    .concat(mockData.mockCountries
      .map(({ code, name }) => ({ value: code, label: name }))
      .sort((a, b) => a.label.localeCompare(b.label))
    );

//   const stateOptions = [{
//     value: '',
//     label: intl.formatMessage(mockData.messages['account.settings.field.state.options.empty']),
//   }].concat(mockData.getStatesList(country));

  const languageProficiencyOptions = [{
    value: '',
    label: intl.formatMessage(mockData.messages['account.settings.field.language_proficiencies.options.empty']),
  }].concat(mockData.mockLanguages
    .map(({ code, name }) => ({ value: code, label: name }))
    .sort((a, b) => a.label.localeCompare(b.label))
  );

  const yearOfBirthOptions = [{
    value: '',
    label: intl.formatMessage(mockData.messages['account.settings.field.year_of_birth.options.empty']),
  }].concat(mockData.YEAR_OF_BIRTH_OPTIONS);

  const educationLevelOptions = mockData.EDUCATION_LEVELS.map(key => ({
    value: key,
    label: intl.formatMessage(mockData.messages[`account.settings.field.education.levels.${key || 'empty'}`]),
  }));

  const genderOptions = mockData.GENDER_OPTIONS.map(key => ({
    value: key,
    label: intl.formatMessage(mockData.messages[`account.settings.field.gender.options.${key || 'empty'}`]),
  }));

  const workExperienceOptions = mockData.WORK_EXPERIENCE_OPTIONS.map(key => ({
    value: key,
    label: key === '' 
      ? intl.formatMessage(mockData.messages['account.settings.field.work.experience.options.empty']) 
      : key,
  }));

  return {
    countryOptions,
    
    languageProficiencyOptions,
    yearOfBirthOptions,
    educationLevelOptions,
    genderOptions,
    workExperienceOptions,
  };
});

export default getLocalizedOptions;
