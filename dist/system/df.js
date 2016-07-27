'use strict';

System.register(['aurelia-logging', './i18n'], function (_export, _context) {
  "use strict";

  var LogManager, I18N, DfValueConverter;

  

  return {
    setters: [function (_aureliaLogging) {
      LogManager = _aureliaLogging;
    }, function (_i18n) {
      I18N = _i18n.I18N;
    }],
    execute: function () {
      _export('DfValueConverter', DfValueConverter = function () {
        DfValueConverter.inject = function inject() {
          return [I18N];
        };

        function DfValueConverter(i18n) {
          

          this.service = i18n;
        }

        DfValueConverter.prototype.toView = function toView(value, dfOrOptions, locale, df) {
          if (value === null || typeof value === 'undefined' || typeof value === 'string' && value.trim() === '') {
            return value;
          }

          if (dfOrOptions && typeof dfOrOptions.format === 'function') {
            return dfOrOptions.format(value);
          } else if (df) {
            var i18nLogger = LogManager.getLogger('i18n');
            i18nLogger.warn('This ValueConverter signature is depcrecated and will be removed in future releases. Please use the signature [dfOrOptions, locale]');
          } else {
            df = this.service.df(dfOrOptions, locale || this.service.getLocale());
          }

          return df.format(value);
        };

        return DfValueConverter;
      }());

      _export('DfValueConverter', DfValueConverter);
    }
  };
});