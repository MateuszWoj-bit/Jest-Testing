import getLocalizedOptions from './index.js'; //
import { mockCountries, messages } from './mockData.js'; 

describe('getLocalizedOptions', () => {
  // Mock Intl
  const intl = {
    formatMessage: ( defaultMessage ) => defaultMessage, // Mock implementation of formatMessage
  };

  it('should return sorted countryOptions', () => {
    const locale = 'en'; // Mock locale
    const country = ''; // Mock country input

    // Get localized options
    const { countryOptions } = getLocalizedOptions(locale, country, intl);

    // Extract the sorted country names for comparison
    const sortedCountryNames = [...mockCountries]
      .sort((a, b) => a.name.localeCompare(b.name))
      .map(country => country.name);
    
    const actualCountryNames = countryOptions
      .map(option => option.label)
      .slice(1); // Remove the empty option

    // Test if actual country names match the expected sorted names
    expect(actualCountryNames).toEqual(sortedCountryNames);
  });
});
