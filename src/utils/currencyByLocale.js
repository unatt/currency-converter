export function getCurrencyDetailsByLocale(locale) {
  let codeToCountry = {
    AED: 'United Arab Emirates',
    AFN: 'Afghanistan',
    ALL: 'Albania',
    AMD: 'Armenia',
    ANG: 'Netherlands Antilles',
    AOA: 'Angola',
    ARS: 'Argentina',
    AUD: 'Australia, Australian Antarctic Territory, Christmas Island, Cocos (Keeling) Islands, Heard and McDonald Islands, Kiribati, Nauru, Norfolk Island, Tuvalu',
    AWG: 'Aruba',
    AZN: 'Azerbaijan',
    BAM: 'Bosnia and Herzegovina',
    BBD: 'Barbados',
    BDT: 'Bangladesh',
    BGN: 'Bulgaria',
    BHD: 'Bahrain',
    BIF: 'Burundi',
    BMD: 'Bermuda',
    BND: 'Brunei',
    BOB: 'Bolivia',
    BOV: 'Bolivia',
    BRL: 'Brazil',
    BSD: 'Bahamas',
    BTN: 'Bhutan',
    BWP: 'Botswana',
    BYR: 'Belarus',
    BZD: 'Belize',
    CAD: 'Canada',
    CDF: 'Democratic Republic of Congo',
    CHE: 'Switzerland',
    CHF: 'Switzerland, Liechtenstein',
    CHW: 'Switzerland',
    CLF: 'Chile',
    CLP: 'Chile',
    CNY: 'Mainland China',
    COP: 'Colombia',
    COU: 'Colombia',
    CRC: 'Costa Rica',
    CUP: 'Cuba',
    CVE: 'Cape Verde',
    CYP: 'Cyprus',
    CZK: 'Czech Republic',
    DJF: 'Djibouti',
    DKK: 'Denmark, Faroe Islands, Greenland',
    DOP: 'Dominican Republic',
    DZD: 'Algeria',
    EEK: 'Estonia',
    EGP: 'Egypt',
    ERN: 'Eritrea',
    ETB: 'Ethiopia',
    EUR: 'European Union, see eurozone',
    FJD: 'Fiji',
    FKP: 'Falkland Islands',
    GBP: 'United Kingdom',
    GEL: 'Georgia',
    GHS: 'Ghana',
    GIP: 'Gibraltar',
    GMD: 'Gambia',
    GNF: 'Guinea',
    GTQ: 'Guatemala',
    GYD: 'Guyana',
    HKD: 'Hong Kong Special Administrative Region',
    HNL: 'Honduras',
    HRK: 'Croatia',
    HTG: 'Haiti',
    HUF: 'Hungary',
    IDR: 'Indonesia',
    ILS: 'Israel',
    INR: 'Bhutan, India',
    IQD: 'Iraq',
    IRR: 'Iran',
    ISK: 'Iceland',
    JMD: 'Jamaica',
    JOD: 'Jordan',
    JPY: 'Japan',
    KES: 'Kenya',
    KGS: 'Kyrgyzstan',
    KHR: 'Cambodia',
    KMF: 'Comoros',
    KPW: 'North Korea',
    KRW: 'South Korea',
    KWD: 'Kuwait',
    KYD: 'Cayman Islands',
    KZT: 'Kazakhstan',
    LAK: 'Laos',
    LBP: 'Lebanon',
    LKR: 'Sri Lanka',
    LRD: 'Liberia',
    LSL: 'Lesotho',
    LTL: 'Lithuania',
    LVL: 'Latvia',
    LYD: 'Libya',
    MAD: 'Morocco, Western Sahara',
    MDL: 'Moldova',
    MGA: 'Madagascar',
    MKD: 'Former Yugoslav Republic of Macedonia',
    MMK: 'Myanmar',
    MNT: 'Mongolia',
    MOP: 'Macau Special Administrative Region',
    MRO: 'Mauritania',
    MTL: 'Malta',
    MUR: 'Mauritius',
    MVR: 'Maldives',
    MWK: 'Malawi',
    MXN: 'Mexico',
    MXV: 'Mexico',
    MYR: 'Malaysia',
    MZN: 'Mozambique',
    NAD: 'Namibia',
    NGN: 'Nigeria',
    NIO: 'Nicaragua',
    NOK: 'Norway',
    NPR: 'Nepal',
    NZD: 'Cook Islands, New Zealand, Niue, Pitcairn, Tokelau',
    OMR: 'Oman',
    PAB: 'Panama',
    PEN: 'Peru',
    PGK: 'Papua New Guinea',
    PHP: 'Philippines',
    PKR: 'Pakistan',
    PLN: 'Poland',
    PYG: 'Paraguay',
    QAR: 'Qatar',
    RON: 'Romania',
    RSD: 'Serbia',
    RUB: 'Russia, Abkhazia, South Ossetia',
    RWF: 'Rwanda',
    SAR: 'Saudi Arabia',
    SBD: 'Solomon Islands',
    SCR: 'Seychelles',
    SDG: 'Sudan',
    SEK: 'Sweden',
    SGD: 'Singapore',
    SHP: 'Saint Helena',
    SKK: 'Slovakia',
    SLL: 'Sierra Leone',
    SOS: 'Somalia',
    SRD: 'Suriname',
    STD: 'São Tomé and Príncipe',
    SYP: 'Syria',
    SZL: 'Swaziland',
    THB: 'Thailand',
    TJS: 'Tajikistan',
    TMM: 'Turkmenistan',
    TND: 'Tunisia',
    TOP: 'Tonga',
    TRY: 'Turkey',
    TTD: 'Trinidad and Tobago',
    TWD: 'Taiwan and other islands that are under the effective control of the Republic of China (ROC)',
    TZS: 'Tanzania',
    UAH: 'Ukraine',
    UGX: 'Uganda',
    USD: 'American Samoa, British Indian Ocean Territory, Ecuador, El Salvador, Guam, Haiti, Marshall Islands, Micronesia, Northern Mariana Islands, Palau, Panama, Puerto Rico, East Timor, Turks and Caicos Islands, United States, Virgin Islands',
    USN: 'United States',
    USS: 'United States',
    UYU: 'Uruguay',
    UZS: 'Uzbekistan',
    VEB: 'Venezuela',
    VND: 'Vietnam',
    VUV: 'Vanuatu',
    WST: 'Samoa',
    XAF: 'Cameroon, Central African Republic, Congo, Chad, Equatorial Guinea, Gabon',
    XAG: '',
    XAU: '',
    XBA: '',
    XBB: '',
    XBC: '',
    XBD: '',
    XCD: 'Anguilla, Antigua and Barbuda, Dominica, Grenada, Montserrat, Saint Kitts and Nevis, Saint Lucia, Saint Vincent and the Grenadines',
    XDR: 'International Monetary Fund',
    XFO: 'Bank for International Settlements',
    XFU: 'International Union of Railways',
    XOF: "Benin, Burkina Faso, Côte d'Ivoire, Guinea-Bissau, Mali, Niger, Senegal, Togo",
    XPD: '',
    XPF: 'French Polynesia, New Caledonia, Wallis and Futuna',
    XPT: '',
    XTS: '',
    XXX: '',
    YER: 'Yemen',
    ZAR: 'South Africa',
    ZMK: 'Zambia',
    ZWD: 'Zimbabwe',
  };

  let currencyNames = [
    {
      code: 'AED',
      name: 'Arab Emirates Dirham',
      locale: 'ar-AE',
    },
    {
      code: 'AFN',
      name: 'Afghanistan Afghani',
      locale: 'ps-AF',
    },
    {
      code: 'ALL',
      name: 'Albanian Lek',
      locale: 'sq-AL',
    },
    {
      code: 'AMD',
      name: 'Armenian Dram',
      locale: 'hy-AM',
    },
    {
      code: 'ANG',
      name: 'Netherlands Antillean Guilder',
      locale: 'nl-CW',
    },
    {
      code: 'AOA',
      name: 'Angolan Kwanza',
      locale: 'ln-AO',
    },
    {
      code: 'ARS',
      name: 'Argentine Peso',
      locale: 'es-AR',
    },
    {
      code: 'AUD',
      name: 'Australian Dollar',
      locale: 'en-AU',
    },
    {
      code: 'AWG',
      name: 'Aruban Guilder',
      locale: 'nl-AW',
    },
    {
      code: 'AZN',
      name: 'Azerbaijan New Manat',
      locale: 'az-Cyrl-AZ',
    },
    {
      code: 'BAM',
      name: 'Marka',
      locale: 'bs-Cyrl-BA',
    },
    {
      code: 'BBD',
      name: 'Barbados Dollar',
      locale: 'en-BB',
    },
    {
      code: 'BDT',
      name: 'Bangladeshi Taka',
      locale: 'bn-BD',
    },
    {
      code: 'BGN',
      name: 'Bulgarian Lev',
      locale: 'bg-BG',
    },
    {
      code: 'BHD',
      name: 'Bahraini Dinar',
      locale: 'ar-BH',
    },
    {
      code: 'BIF',
      name: 'Burundi Franc',
      locale: 'rn-BI',
    },
    {
      code: 'BMD',
      name: 'Bermudian Dollar',
      locale: 'en-BM',
    },
    {
      code: 'BND',
      name: 'Brunei Dollar',
      locale: 'ms-Latn-BN',
    },
    {
      code: 'BOB',
      name: 'Boliviano',
      locale: 'es-BO',
    },
    {
      code: 'BRL',
      name: 'Brazilian Real',
      locale: 'pt-BR',
    },
    {
      code: 'BSD',
      name: 'Bahamian Dollar',
      locale: 'en-BS',
    },
    {
      code: 'BTN',
      name: 'Bhutan Ngultrum',
      locale: 'dz-BT',
    },
    {
      code: 'BWP',
      name: 'Botswana Pula',
      locale: 'en-BW',
    },
    {
      code: 'BYR',
      name: 'Belarussian Ruble',
      locale: 'ru-BY',
    },
    {
      code: 'BZD',
      name: 'Belize Dollar',
      locale: 'en-BZ',
    },
    {
      code: 'CAD',
      name: 'Canadian Dollar',
      locale: 'fr-CA',
    },
    {
      code: 'CDF',
      name: 'Congo/Kinshasa Franc',
      locale: 'lu-CD',
    },
    {
      code: 'CHF',
      name: 'Swiss Franc',
      locale: 'rm-CH',
    },
    {
      code: 'CLP',
      name: 'Chilean Peso',
      locale: 'es-CL',
    },
    {
      code: 'CNY',
      name: 'Yuan Renminbi',
      locale: 'ii-CN',
    },
    {
      code: 'COP',
      name: 'Colombian Peso',
      locale: 'es-CO',
    },
    {
      code: 'CRC',
      name: 'Costa Rican Colon',
      locale: 'es-CR',
    },
    {
      code: 'CUP',
      name: 'Cuban Peso',
      locale: 'es-CU',
    },
    {
      code: 'CVE',
      name: 'Cape Verde Escudo',
      locale: 'pt-CV',
    },
    {
      code: 'CZK',
      name: 'Czech Koruna',
      locale: 'en-CZ',
    },
    {
      code: 'DJF',
      name: 'Djibouti Franc',
      locale: 'ar-DJ',
    },
    {
      code: 'DKK',
      name: 'Danish Krone',
      locale: 'da-DK',
    },
    {
      code: 'DOP',
      name: 'Dominican Peso',
      locale: 'es-DO',
    },
    {
      code: 'DZD',
      name: 'Algerian Dinar',
      locale: 'kab-DZ',
    },
    {
      code: 'EGP',
      name: 'Egyptian Pound',
      locale: 'ar-EG',
    },
    {
      code: 'ERN',
      name: 'Eritrean Nakfa',
      locale: 'ar-ER',
    },
    {
      code: 'ETB',
      name: 'Ethiopian Birr',
      locale: 'om-ET',
    },
    {
      code: 'EUR',
      name: 'Euro',
      locale: 'en-DE',
    },
    {
      code: 'FJD',
      name: 'Fiji Dollar',
      locale: 'en-FJ',
    },
    {
      code: 'FKP',
      name: 'Falkland Islands Pound',
      locale: 'en-FK',
    },
    {
      code: 'GBP',
      name: 'Pound Sterling',
      locale: 'en-GB',
    },
    {
      code: 'GEL',
      name: 'Georgian Lari',
      locale: 'ka-GE',
    },
    {
      code: 'GHS',
      name: 'Ghanaian Cedi',
      locale: 'ak-GH',
    },
    {
      code: 'GGP',
      name: 'Guernsey Pound',
      locale: 'en-GG',
    },
    {
      code: 'GIP',
      name: 'Gibraltar Pound',
      locale: 'en-GI',
    },
    {
      code: 'GMD',
      name: 'Gambian Dalasi',
      locale: 'en-GM',
    },
    {
      code: 'GNF',
      name: 'Guinea Franc',
      locale: 'fr-GN',
    },
    {
      code: 'GTQ',
      name: 'Guatemalan Quetzal',
      locale: 'es-GT',
    },
    {
      code: 'GYD',
      name: 'Guyana Dollar',
      locale: 'en-GY',
    },
    {
      code: 'HKD',
      name: 'Hong Kong Dollar',
      locale: 'zh-Hans-HK',
    },
    {
      code: 'HNL',
      name: 'Honduran Lempira',
      locale: 'es-HN',
    },
    {
      code: 'HRK',
      name: 'Croatian Kuna',
      locale: 'hr-HR',
    },
    {
      code: 'HTG',
      name: 'Haitian Gourde',
      locale: 'fr-HT',
    },
    {
      code: 'HUF',
      name: 'Hungarian Forint',
      locale: 'en-HU',
    },
    {
      code: 'IDR',
      name: 'Indonesian Rupiah',
      locale: 'id-ID',
    },
    {
      code: 'ILS',
      name: 'Israeli New Shekel',
      locale: 'ar-IL',
    },
    {
      code: 'INR',
      name: 'Indian Rupee',
      locale: 'kok-IN',
    },
    {
      code: 'IQD',
      name: 'Iraqi Dinar',
      locale: 'ar-IQ',
    },
    {
      code: 'IRR',
      name: 'Iranian Rial',
      locale: 'fa-IR',
    },
    {
      code: 'ISK',
      name: 'Iceland Krona',
      locale: 'en-IS',
    },
    {
      code: 'JMD',
      name: 'Jamaican Dollar',
      locale: 'en-JM',
    },
    {
      code: 'JOD',
      name: 'Jordanian Dinar',
      locale: 'ar-JO',
    },
    {
      code: 'JPY',
      name: 'Japanese Yen',
      locale: 'ja-JP',
    },
    {
      code: 'KES',
      name: 'Kenyan Shilling',
      locale: 'saq-KE',
    },
    {
      code: 'KGS',
      name: 'Som',
      locale: 'ru-KG',
    },
    {
      code: 'KHR',
      name: 'Kampuchean Riel',
      locale: 'km-KH',
    },
    {
      code: 'KMF',
      name: 'Comoros Franc',
      locale: 'ar-KM',
    },
    {
      code: 'KPW',
      name: 'North Korean Won',
      locale: 'ko-KP',
    },
    {
      code: 'KRW',
      name: 'Korean Won',
      locale: 'ko-KR',
    },
    {
      code: 'KWD',
      name: 'Kuwaiti Dinar',
      locale: 'ar-KW',
    },
    {
      code: 'KYD',
      name: 'Cayman Islands Dollar',
      locale: 'en-KY',
    },
    {
      code: 'KZT',
      name: 'Kazakhstan Tenge',
      locale: 'kk-Cyrl-KZ',
    },
    {
      code: 'LAK',
      name: 'Lao Kip',
      locale: 'lo-LA',
    },
    {
      code: 'LBP',
      name: 'Lebanese Pound',
      locale: 'ar-LB',
    },
    {
      code: 'LKR',
      name: 'Sri Lanka Rupee',
      locale: 'ta-LK',
    },
    {
      code: 'LRD',
      name: 'Liberian Dollar',
      locale: 'vai-Latn-LR',
    },
    {
      code: 'LSL',
      name: 'Lesotho loti',
      locale: 'en-LS',
    },
    {
      code: 'LTL',
      name: 'Lithuanian Litas',
      locale: 'en-LT',
    },
    {
      code: 'LVL',
      name: 'Latvian Lats',
      locale: 'en-LV',
    },
    {
      code: 'LYD',
      name: 'Libyan Dinar',
      locale: 'ar-LY',
    },
    {
      code: 'MAD',
      name: 'Moroccan Dirham',
      locale: 'ar-MA',
    },
    {
      code: 'MDL',
      name: 'Moldovan Leu',
      locale: 'ru-MD',
    },
    {
      code: 'MGA',
      name: 'Malagasy Ariary',
      locale: 'mg-MG',
    },
    {
      code: 'MKD',
      name: 'Denar',
      locale: 'sq-MK',
    },
    {
      code: 'MMK',
      name: 'Myanmar Kyat',
      locale: 'my-MM',
    },
    {
      code: 'MNT',
      name: 'Mongolian Tugrik',
      locale: 'mn-Cyrl-MN',
    },
    {
      code: 'MOP',
      name: 'Macau Pataca',
      locale: 'zh-Hant-MO',
    },
    {
      code: 'MRO',
      name: 'Mauritanian Ouguiya',
      locale: 'ar-MR',
    },
    {
      code: 'MUR',
      name: 'Mauritius Rupee',
      locale: 'en-MU',
    },
    {
      code: 'MWK',
      name: 'Malawi Kwacha',
      locale: 'en-MW',
    },
    {
      code: 'MXN',
      name: 'Mexican Nuevo Peso',
      locale: 'es-MX',
    },
    {
      code: 'MYR',
      name: 'Malaysian Ringgit',
      locale: 'ms-Latn-MY',
    },
    {
      code: 'MZN',
      name: 'Mozambique Metical',
      locale: 'mgh-MZ',
    },
    {
      code: 'NAD',
      name: 'Namibian Dollar',
      locale: 'naq-NA',
    },
    {
      code: 'NGN',
      name: 'Nigerian Naira',
      locale: 'ha-Latn-NG',
    },
    {
      code: 'NIO',
      name: 'Nicaraguan Cordoba Oro',
      locale: 'es-NI',
    },
    {
      code: 'NOK',
      name: 'Norwegian Krone',
      locale: 'nn-NO',
    },
    {
      code: 'NPR',
      name: 'Nepalese Rupee',
      locale: 'ne-NP',
    },
    {
      code: 'NZD',
      name: 'New Zealand Dollar',
      locale: 'en-NZ',
    },
    {
      code: 'OMR',
      name: 'Omani Rial',
      locale: 'ar-OM',
    },
    {
      code: 'PAB',
      name: 'Panamanian Balboa',
      locale: 'es-PA',
    },
    {
      code: 'PEN',
      name: 'Peruvian Nuevo Sol',
      locale: 'es-PE',
    },
    {
      code: 'PGK',
      name: 'Papua New Guinea Kina',
      locale: 'en-PG',
    },
    {
      code: 'PHP',
      name: 'Philippine Peso',
      locale: 'es-PH',
    },
    {
      code: 'PKR',
      name: 'Pakistan Rupee',
      locale: 'pa-Arab-PK',
    },
    {
      code: 'PLN',
      name: 'Polish Zloty',
      locale: 'en-PL',
    },
    {
      code: 'PYG',
      name: 'Paraguay Guarani',
      locale: 'es-PY',
    },
    {
      code: 'QAR',
      name: 'Qatari Rial',
      locale: 'ar-QA',
    },
    {
      code: 'RON',
      name: 'Romanian New Leu',
      locale: 'en-RO',
    },
    {
      code: 'RSD',
      name: 'Dinar',
      locale: 'sr-Latn-RS',
    },
    {
      code: 'RUB',
      name: 'Russian Ruble',
      locale: 'ru-RU',
    },
    {
      code: 'RWF',
      name: 'Rwanda Franc',
      locale: 'rw-RW',
    },
    {
      code: 'SAR',
      name: 'Saudi Riyal',
      locale: 'ar-SA',
    },
    {
      code: 'SBD',
      name: 'Solomon Islands Dollar',
      locale: 'en-SB',
    },
    {
      code: 'SCR',
      name: 'Seychelles Rupee',
      locale: 'en-SC',
    },
    {
      code: 'SDG',
      name: 'Sudanese Pound',
      locale: 'ar-SD',
    },
    {
      code: 'SEK',
      name: 'Swedish Krona',
      locale: 'sv-SE',
    },
    {
      code: 'SGD',
      name: 'Singapore Dollar',
      locale: 'ms-Latn-SG',
    },
    {
      code: 'SHP',
      name: 'Saint Helena Pound',
      locale: 'en-SH',
    },
    {
      code: 'SLL',
      name: 'Sierra Leone Leone',
      locale: 'en-SL',
    },
    {
      code: 'SOS',
      name: 'Somali Shilling',
      locale: 'ar-SO',
    },
    {
      code: 'SRD',
      name: 'Surinam Dollar',
      locale: 'nl-SR',
    },
    {
      code: 'STD',
      name: 'Dobra',
      locale: 'pt-ST',
    },
    {
      code: 'SYP',
      name: 'Syrian Pound',
      locale: 'ar-SY',
    },
    {
      code: 'SZL',
      name: 'Swaziland Lilangeni',
      locale: 'en-SZ',
    },
    {
      code: 'THB',
      name: 'Thai Baht',
      locale: 'th-TH',
    },
    {
      code: 'TJS',
      name: 'Tajik Somoni',
      locale: 'tg-Cyrl-TJ',
    },
    {
      code: 'TMT',
      name: 'Manat',
      locale: 'tk-Latn-TM',
    },
    {
      code: 'TND',
      name: 'Tunisian Dollar',
      locale: 'ar-TN',
    },
    {
      code: 'TOP',
      name: "Tongan Pa'anga",
      locale: 'to-TO',
    },
    {
      code: 'TRY',
      name: 'Turkish Lira',
      locale: 'tr-TR',
    },
    {
      code: 'TTD',
      name: 'Trinidad and Tobago Dollar',
      locale: 'en-TT',
    },
    {
      code: 'TWD',
      name: 'Taiwan Dollar',
      locale: 'zh-Hant-TW',
    },
    {
      code: 'TZS',
      name: 'Tanzanian Shilling',
      locale: 'sw-TZ',
    },
    {
      code: 'UAH',
      name: 'Ukraine Hryvnia',
      locale: 'ru-UA',
    },
    {
      code: 'UGX',
      name: 'Uganda Shilling',
      locale: 'teo-UG',
    },
    {
      code: 'USD',
      name: 'US Dollar',
      locale: 'en-US-POSIX',
    },
    {
      code: 'UYU',
      name: 'Uruguayan Peso',
      locale: 'es-UY',
    },
    {
      code: 'UZS',
      name: 'Uzbekistan Sum',
      locale: 'uz-Cyrl-UZ',
    },
    {
      code: 'VEF',
      name: 'Venezuelan Bolivar',
      locale: 'es-VE',
    },
    {
      code: 'VND',
      name: 'Vietnamese Dong',
      locale: 'vi-VN',
    },
    {
      code: 'VUV',
      name: 'Vanuatu Vatu',
      locale: 'en-VU',
    },
    {
      code: 'WST',
      name: 'Samoan Tala',
      locale: 'en-WS',
    },
    {
      code: 'YER',
      name: 'Yemeni Rial',
      locale: 'ar-YE',
    },
    {
      code: 'ZAR',
      name: 'South African Rand',
      locale: 'en-LS',
    },
    {
      code: 'ZMW',
      name: 'Zambian Kwacha',
      locale: 'af-ZA',
    },
  ];

  const code = currencyNames.find((l) => l.locale === locale);
  return {
    curCode: code.code,
    country: codeToCountry[code.code].split(',')[0],
  };
}