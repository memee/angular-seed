exports.httpBackendMock = function() {
    angular.module('httpBackendMock', ['myApp', 'ngMockE2E'])
        .run(function($httpBackend) {
            console.log('Test platform bootstrapping');

            //$httpBackend.whenGET('/events').respond([sampleEvent]);
            //$httpBackend.whenGET('/events/' + sampleEventId).respond(sampleEvent);
            //$httpBackend.whenGET('/login').passThrough();
            $httpBackend.whenGET(/view2\/.*/).passThrough();
            $httpBackend.whenGET(/view1\/.*/).passThrough();
            //$httpBackend.whenGET(/.*/).passThrough();

            $httpBackend.whenGET('/app/api/package.json').respond(
                function(method, url, data) {
                    console.log('in fake get');
                    return [200, {name: 'DROGO'}, {}];
                }
            );

            $httpBackend.whenGET('http://jsonplaceholder.typicode.com/posts/1').respond({
                "userId": 1,
                "id": 1,
                "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            });

            console.log('Test platform bootstrapping ... done');
        });
};