export function getCurrencyDetailsByLocale(locale) {
  const currencyWithCountryByLocale = {
    'ar-AE': {
      code: 'AED',
      countryName: 'United Arab Emirates',
    },
    'ps-AF': {
      code: 'AFN',
      countryName: 'Afghanistan',
    },
    'sq-AL': {
      code: 'ALL',
      countryName: 'Albania',
    },
    'hy-AM': {
      code: 'AMD',
      countryName: 'Armenia',
    },
    'nl-CW': {
      code: 'ANG',
      countryName: 'Netherlands Antilles',
    },
    'ln-AO': {
      code: 'AOA',
      countryName: 'Angola',
    },
    'es-AR': {
      code: 'ARS',
      countryName: 'Argentina',
    },
    'en-AU': {
      code: 'AUD',
      countryName:
        'Australia, Australian Antarctic Territory, Christmas Island, Cocos (Keeling) Islands, Heard and McDonald Islands, Kiribati, Nauru, Norfolk Island, Tuvalu',
    },
    'nl-AW': {
      code: 'AWG',
      countryName: 'Aruba',
    },
    'az-Cyrl-AZ': {
      code: 'AZN',
      countryName: 'Azerbaijan',
    },
    'bs-Cyrl-BA': {
      code: 'BAM',
      countryName: 'Bosnia and Herzegovina',
    },
    'en-BB': {
      code: 'BBD',
      countryName: 'Barbados',
    },
    'bn-BD': {
      code: 'BDT',
      countryName: 'Bangladesh',
    },
    'bg-BG': {
      code: 'BGN',
      countryName: 'Bulgaria',
    },
    'ar-BH': {
      code: 'BHD',
      countryName: 'Bahrain',
    },
    'rn-BI': {
      code: 'BIF',
      countryName: 'Burundi',
    },
    'en-BM': {
      code: 'BMD',
      countryName: 'Bermuda',
    },
    'ms-Latn-BN': {
      code: 'BND',
      countryName: 'Brunei',
    },
    'es-BO': {
      code: 'BOB',
      countryName: 'Bolivia',
    },
    'pt-BR': {
      code: 'BRL',
      countryName: 'Brazil',
    },
    'en-BS': {
      code: 'BSD',
      countryName: 'Bahamas',
    },
    'dz-BT': {
      code: 'BTN',
      countryName: 'Bhutan',
    },
    'en-BW': {
      code: 'BWP',
      countryName: 'Botswana',
    },
    'ru-BY': {
      code: 'BYR',
      countryName: 'Belarus',
    },
    'en-BZ': {
      code: 'BZD',
      countryName: 'Belize',
    },
    'fr-CA': {
      code: 'CAD',
      countryName: 'Canada',
    },
    'lu-CD': {
      code: 'CDF',
      countryName: 'Democratic Republic of Congo',
    },
    'rm-CH': {
      code: 'CHF',
      countryName: 'Switzerland, Liechtenstein',
    },
    'es-CL': {
      code: 'CLP',
      countryName: 'Chile',
    },
    'ii-CN': {
      code: 'CNY',
      countryName: 'Mainland China',
    },
    'es-CO': {
      code: 'COP',
      countryName: 'Colombia',
    },
    'es-CR': {
      code: 'CRC',
      countryName: 'Costa Rica',
    },
    'es-CU': {
      code: 'CUP',
      countryName: 'Cuba',
    },
    'pt-CV': {
      code: 'CVE',
      countryName: 'Cape Verde',
    },
    'en-CZ': {
      code: 'CZK',
      countryName: 'Czech Republic',
    },
    'ar-DJ': {
      code: 'DJF',
      countryName: 'Djibouti',
    },
    'da-DK': {
      code: 'DKK',
      countryName: 'Denmark, Faroe Islands, Greenland',
    },
    'es-DO': {
      code: 'DOP',
      countryName: 'Dominican Republic',
    },
    'kab-DZ': {
      code: 'DZD',
      countryName: 'Algeria',
    },
    'ar-EG': {
      code: 'EGP',
      countryName: 'Egypt',
    },
    'ar-ER': {
      code: 'ERN',
      countryName: 'Eritrea',
    },
    'om-ET': {
      code: 'ETB',
      countryName: 'Ethiopia',
    },
    'en-DE': {
      code: 'EUR',
      countryName: 'European Union, see eurozone',
    },
    'en-FJ': {
      code: 'FJD',
      countryName: 'Fiji',
    },
    'en-FK': {
      code: 'FKP',
      countryName: 'Falkland Islands',
    },
    'en-GB': {
      code: 'GBP',
      countryName: 'United Kingdom',
    },
    'ka-GE': {
      code: 'GEL',
      countryName: 'Georgia',
    },
    'ak-GH': {
      code: 'GHS',
      countryName: 'Ghana',
    },
    'en-GG': {
      code: 'GGP',
    },
    'en-GI': {
      code: 'GIP',
      countryName: 'Gibraltar',
    },
    'en-GM': {
      code: 'GMD',
      countryName: 'Gambia',
    },
    'fr-GN': {
      code: 'GNF',
      countryName: 'Guinea',
    },
    'es-GT': {
      code: 'GTQ',
      countryName: 'Guatemala',
    },
    'en-GY': {
      code: 'GYD',
      countryName: 'Guyana',
    },
    'zh-Hans-HK': {
      code: 'HKD',
      countryName: 'Hong Kong Special Administrative Region',
    },
    'es-HN': {
      code: 'HNL',
      countryName: 'Honduras',
    },
    'hr-HR': {
      code: 'HRK',
      countryName: 'Croatia',
    },
    'fr-HT': {
      code: 'HTG',
      countryName: 'Haiti',
    },
    'en-HU': {
      code: 'HUF',
      countryName: 'Hungary',
    },
    'id-ID': {
      code: 'IDR',
      countryName: 'Indonesia',
    },
    'ar-IL': {
      code: 'ILS',
      countryName: 'Israel',
    },
    'kok-IN': {
      code: 'INR',
      countryName: 'Bhutan, India',
    },
    'ar-IQ': {
      code: 'IQD',
      countryName: 'Iraq',
    },
    'fa-IR': {
      code: 'IRR',
      countryName: 'Iran',
    },
    'en-IS': {
      code: 'ISK',
      countryName: 'Iceland',
    },
    'en-JM': {
      code: 'JMD',
      countryName: 'Jamaica',
    },
    'ar-JO': {
      code: 'JOD',
      countryName: 'Jordan',
    },
    'ja-JP': {
      code: 'JPY',
      countryName: 'Japan',
    },
    'saq-KE': {
      code: 'KES',
      countryName: 'Kenya',
    },
    'ru-KG': {
      code: 'KGS',
      countryName: 'Kyrgyzstan',
    },
    'km-KH': {
      code: 'KHR',
      countryName: 'Cambodia',
    },
    'ar-KM': {
      code: 'KMF',
      countryName: 'Comoros',
    },
    'ko-KP': {
      code: 'KPW',
      countryName: 'North Korea',
    },
    'ko-KR': {
      code: 'KRW',
      countryName: 'South Korea',
    },
    'ar-KW': {
      code: 'KWD',
      countryName: 'Kuwait',
    },
    'en-KY': {
      code: 'KYD',
      countryName: 'Cayman Islands',
    },
    'kk-Cyrl-KZ': {
      code: 'KZT',
      countryName: 'Kazakhstan',
    },
    'lo-LA': {
      code: 'LAK',
      countryName: 'Laos',
    },
    'ar-LB': {
      code: 'LBP',
      countryName: 'Lebanon',
    },
    'ta-LK': {
      code: 'LKR',
      countryName: 'Sri Lanka',
    },
    'vai-Latn-LR': {
      code: 'LRD',
      countryName: 'Liberia',
    },
    'en-LS': {
      code: 'ZAR',
      countryName: 'South Africa',
    },
    'en-LT': {
      code: 'LTL',
      countryName: 'Lithuania',
    },
    'en-LV': {
      code: 'LVL',
      countryName: 'Latvia',
    },
    'ar-LY': {
      code: 'LYD',
      countryName: 'Libya',
    },
    'ar-MA': {
      code: 'MAD',
      countryName: 'Morocco, Western Sahara',
    },
    'ru-MD': {
      code: 'MDL',
      countryName: 'Moldova',
    },
    'mg-MG': {
      code: 'MGA',
      countryName: 'Madagascar',
    },
    'sq-MK': {
      code: 'MKD',
      countryName: 'Former Yugoslav Republic of Macedonia',
    },
    'my-MM': {
      code: 'MMK',
      countryName: 'Myanmar',
    },
    'mn-Cyrl-MN': {
      code: 'MNT',
      countryName: 'Mongolia',
    },
    'zh-Hant-MO': {
      code: 'MOP',
      countryName: 'Macau Special Administrative Region',
    },
    'ar-MR': {
      code: 'MRO',
      countryName: 'Mauritania',
    },
    'en-MU': {
      code: 'MUR',
      countryName: 'Mauritius',
    },
    'en-MW': {
      code: 'MWK',
      countryName: 'Malawi',
    },
    'es-MX': {
      code: 'MXN',
      countryName: 'Mexico',
    },
    'ms-Latn-MY': {
      code: 'MYR',
      countryName: 'Malaysia',
    },
    'mgh-MZ': {
      code: 'MZN',
      countryName: 'Mozambique',
    },
    'naq-NA': {
      code: 'NAD',
      countryName: 'Namibia',
    },
    'ha-Latn-NG': {
      code: 'NGN',
      countryName: 'Nigeria',
    },
    'es-NI': {
      code: 'NIO',
      countryName: 'Nicaragua',
    },
    'nn-NO': {
      code: 'NOK',
      countryName: 'Norway',
    },
    'ne-NP': {
      code: 'NPR',
      countryName: 'Nepal',
    },
    'en-NZ': {
      code: 'NZD',
      countryName: 'Cook Islands, New Zealand, Niue, Pitcairn, Tokelau',
    },
    'ar-OM': {
      code: 'OMR',
      countryName: 'Oman',
    },
    'es-PA': {
      code: 'PAB',
      countryName: 'Panama',
    },
    'es-PE': {
      code: 'PEN',
      countryName: 'Peru',
    },
    'en-PG': {
      code: 'PGK',
      countryName: 'Papua New Guinea',
    },
    'es-PH': {
      code: 'PHP',
      countryName: 'Philippines',
    },
    'pa-Arab-PK': {
      code: 'PKR',
      countryName: 'Pakistan',
    },
    'en-PL': {
      code: 'PLN',
      countryName: 'Poland',
    },
    'es-PY': {
      code: 'PYG',
      countryName: 'Paraguay',
    },
    'ar-QA': {
      code: 'QAR',
      countryName: 'Qatar',
    },
    'en-RO': {
      code: 'RON',
      countryName: 'Romania',
    },
    'sr-Latn-RS': {
      code: 'RSD',
      countryName: 'Serbia',
    },
    'ru-RU': {
      code: 'RUB',
      countryName: 'Russia, Abkhazia, South Ossetia',
    },
    'rw-RW': {
      code: 'RWF',
      countryName: 'Rwanda',
    },
    'ar-SA': {
      code: 'SAR',
      countryName: 'Saudi Arabia',
    },
    'en-SB': {
      code: 'SBD',
      countryName: 'Solomon Islands',
    },
    'en-SC': {
      code: 'SCR',
      countryName: 'Seychelles',
    },
    'ar-SD': {
      code: 'SDG',
      countryName: 'Sudan',
    },
    'sv-SE': {
      code: 'SEK',
      countryName: 'Sweden',
    },
    'ms-Latn-SG': {
      code: 'SGD',
      countryName: 'Singapore',
    },
    'en-SH': {
      code: 'SHP',
      countryName: 'Saint Helena',
    },
    'en-SL': {
      code: 'SLL',
      countryName: 'Sierra Leone',
    },
    'ar-SO': {
      code: 'SOS',
      countryName: 'Somalia',
    },
    'nl-SR': {
      code: 'SRD',
      countryName: 'Suriname',
    },
    'pt-ST': {
      code: 'STD',
      countryName: 'São Tomé and Príncipe',
    },
    'ar-SY': {
      code: 'SYP',
      countryName: 'Syria',
    },
    'en-SZ': {
      code: 'SZL',
      countryName: 'Swaziland',
    },
    'th-TH': {
      code: 'THB',
      countryName: 'Thailand',
    },
    'tg-Cyrl-TJ': {
      code: 'TJS',
      countryName: 'Tajikistan',
    },
    'tk-Latn-TM': {
      code: 'TMT',
    },
    'ar-TN': {
      code: 'TND',
      countryName: 'Tunisia',
    },
    'to-TO': {
      code: 'TOP',
      countryName: 'Tonga',
    },
    'tr-TR': {
      code: 'TRY',
      countryName: 'Turkey',
    },
    'en-TT': {
      code: 'TTD',
      countryName: 'Trinidad and Tobago',
    },
    'zh-Hant-TW': {
      code: 'TWD',
      countryName:
        'Taiwan and other islands that are under the effective control of the Republic of China (ROC)',
    },
    'sw-TZ': {
      code: 'TZS',
      countryName: 'Tanzania',
    },
    'ru-UA': {
      code: 'UAH',
      countryName: 'Ukraine',
    },
    'teo-UG': {
      code: 'UGX',
      countryName: 'Uganda',
    },
    'en-US-POSIX': {
      code: 'USD',
      countryName:
        'United States, American Samoa, British Indian Ocean Territory, Ecuador, El Salvador, Guam, Haiti, Marshall Islands, Micronesia, Northern Mariana Islands, Palau, Panama, Puerto Rico, East Timor, Turks and Caicos Islands, Virgin Islands',
    },
    'en-US': {
      code: 'USD',
      countryName:
        'United States, American Samoa, British Indian Ocean Territory, Ecuador, El Salvador, Guam, Haiti, Marshall Islands, Micronesia, Northern Mariana Islands, Palau, Panama, Puerto Rico, East Timor, Turks and Caicos Islands, Virgin Islands',
    },
    'es-UY': {
      code: 'UYU',
      countryName: 'Uruguay',
    },
    'uz-Cyrl-UZ': {
      code: 'UZS',
      countryName: 'Uzbekistan',
    },
    'es-VE': {
      code: 'VEF',
    },
    'vi-VN': {
      code: 'VND',
      countryName: 'Vietnam',
    },
    'en-VU': {
      code: 'VUV',
      countryName: 'Vanuatu',
    },
    'en-WS': {
      code: 'WST',
      countryName: 'Samoa',
    },
    'ar-YE': {
      code: 'YER',
      countryName: 'Yemen',
    },
    'af-ZA': {
      code: 'ZMW',
    },
  };

  if (currencyWithCountryByLocale[locale]) {
    return currencyWithCountryByLocale[locale];
  }
}
