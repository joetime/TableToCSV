/* Base code from: http://jsfiddle.net/terryyounghk/KPEGU/
*/

function exportTableToCSV($table, filename) {

            var $rows = $table.find('tr:has(td)'),

                // Temporary delimiter characters unlikely to be typed by keyboard
                // This is to avoid accidentally splitting the actual contents
                tmpColDelim = String.fromCharCode(11), // vertical tab character
                tmpRowDelim = String.fromCharCode(0), // null character

                // actual delimiter characters for CSV format
                colDelim = '","',
                rowDelim = '"\r\n"',

                // Grab text from table into CSV formatted string
                csv = '"' + $rows.map(function (i, row) {
                    var $row = $(row),
                        $cols = $row.find('td');

                    return $cols.map(function (j, col) {
                        var $col = $(col),
                            text = "";

                        if ($col.children("a").length > 0) {
                            // theres a link inside the cell
                            var $a = $($col.children("a")[0]); 
                            text = $a.text();
                        }
                        else
                            text = $col.text();


                        text = text.replace(/°/g, " ");     // DEG char
                        return text.replace(/"/g, '""');    // escape ALL double quotes

                    }).get().join(tmpColDelim);

                }).get().join(tmpRowDelim)
                    .split(tmpRowDelim).join(rowDelim)
                    .split(tmpColDelim).join(colDelim) + '"',

                // Data URI
                csvData = 'data:application/csv;charset=utf-8,' + encodeURIComponent(csv);

            $(this)
                .attr({
                    'download': filename,
                    'href': csvData,
                    'target': '_blank'
                });
        }

        // This must be a hyperlink
        $("#export-csv").on('click', function (event) {

            var msg = "This export only works in Firefox, Chrome or Safari for now... IE support coming soon. Continue?"

            if (!confirm(msg)) {
                event.preventDefault();
                return;
            }

            // CSV
            exportTableToCSV.apply(this, [$('#results-table'), 'export.csv']);

            // IF CSV, don't do event.preventDefault() or return false
            // We actually need this to be a typical hyperlink
        });
