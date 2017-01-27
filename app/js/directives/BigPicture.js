/**
 * Created by austin on 27/01/2017.
 */
app.directive('BigPicture', function() {
    return {
        restrict: 'E', //new html element
        scope: {
            info: '=' //what info equals in app-info
        },
        templateUrl: 'js/directives/bigpicture.html' //where the template is located to populate info
    };
});