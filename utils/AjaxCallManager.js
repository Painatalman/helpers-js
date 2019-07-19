(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define([], factory);
    } else if (typeof exports === 'object') {
        // Node, CommonJS-like
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.AjaxCallManager = factory();
    }
} (this, function() {

     function AjaxCallManager() {
     	return {
     		get: function (remoteUrl, {asJson = false, successCallback, errorCallback}) {
     			return this.request(remoteUrl, {
     				asJson,
     				successCallback,
     				errorCallback
     			});
     		},
     		post: function (remoteUrl, {asJson = false, successCallback, errorCallback}) {
     			return this.request(remoteUrl, {
     				method: 'POST',
     				asJson,
     				successCallback,
     				errorCallback
     			});
     		},
     		request: function (remoteUrl, {method = 'GET', asJson = false, successCallback, errorCallback}) {
     			// http://youmightnotneedjquery.com/

					let request = new XMLHttpRequest();
					request.open(method, remoteUrl, true);

					request.onreadystatechange = function requestCallback() {
						if (this.readyState === 4) {
							if (this.status >= 200 && this.status < 400) {
								// Success!
								let data = this.responseText;

								if (asJson) {
									data = JSON.parse(data);
								}
								if (successCallback) {
									return successCallback(data);
								}

							} else {
								if (errorCallback) {
									return errorCallback(request);
								}
								else {
									throw new Error(request.responseText);
								}
							}
						}
					};

					request.send();
					request = null;

     		}
     	}
     }

     return AjaxCallManager;
}));
