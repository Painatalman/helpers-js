/**
 * Converts date strings in the dd/mm/yyyy format to yyyy-mm-dd
 * @param  {string} date string with date
 * @param  {string} separator separator character/sequence of characters used
 * @return {string}      date in the yyyy-mm-dd format
 * @todo for original and desired format
 * @todo some testing, maybe
 */
function getISODateString(dateString, separator, newSeparator) {

    var dateInList = dateString.split(separator || "/");
    var newDateString;

    if (dateInList.length !== 3) {
        throw "This date cannot be converted";
    }

    dateInList.forEach(function(dateItem, index){
        var formattedDateItem = "";

        // add the new separator in the case of being the second or third item
        if (index < (dateInList.length - 1) ) {
            formattedDateItem += (newSeparator || "-");
        }

        // add 0 in the case of a day or month like 1 or 2 instead of 01 or 02
        if (index === 0 || index === 1) {
            // it refers to either the day or the month

            if (dateItem.length !== 2 && dateItem.length !== 1) {
                throw "Invalid day or month, it should have length 1 or 2, but it is " + dateItem.length;
            }

            else if (dateItem.length < 2) {
                formattedDateItem += "0" + dateItem;
            }
            else {
                formattedDateItem += dateItem;
            }
        }
        else {
            // probably the year, leave it alone, for now
            formattedDateItem += dateItem;
        }

        // add the formatted item to the new date string
        newDateString = formattedDateItem + newDateString;
    });

    return newDateString;
}
