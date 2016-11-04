jQuery(function () {
            var drugs = ["acne treatment","Astaxanthin","Aspirin","band-aid","Aspercreme","bandage","non-aspirin"];

            var substringMatcher = function (strs) {
                return function findMatches(q, cb) {
                    var matches, substrRegex;
                    matches = [];
                    substrRegex = new RegExp(q, 'i');

                    $.each(strs, function (i, str) {

                        if (substrRegex.test(str)) {
                            matches.push({ value: str });
                        }

                    });
                    cb(matches);
                };
            };

            $('#basic-example .typeahead').typeahead({
                highlight: true,
                minLength: 1
            },
            {
                name: 'drugs',
                displayKey: 'value',
                source: substringMatcher(drugs)
            });

        });
