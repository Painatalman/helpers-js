/**
 * Add an option to all select boxes based on a selector. 
 * This was made in order to make up for when select boxes have no visible label linked to it
 *
 * @param      {Object}  arg1                     An Object expecting a selector, setAsSelected and defaultValue fields
 * @param      {String}  arg1.selector:'select'   The selector for elements that will be affected by this ('select', by default). Fields without the type 'select' will be ignored
 * @param      {String}  arg1.setAsSelected:true  If set to true (the default value), this will be the default option (the one with the 'selected' attribute)
 * @param      {String} arg1.defaultValue 		  The default value for the included option. By default, it will be ''	
 */
module.exports = function addLabelAsOptionToSelects({selector='select', setAsSelected= true, defaultValue=''}) {
	let elements = document.querySelectorAll(selector);

	[].forEach.call(elements, (element) => {
		if (element.nodeName !== 'SELECT') {
			throw new Error('There is a non-select element here');
		}

    let option = document.createElement('option');
    
    Object.assign(option, {
      selected: 'selected',
      value: defaultValue,
      innerHTML: element.name
    });

    element.appendChild(option);
	});
}
