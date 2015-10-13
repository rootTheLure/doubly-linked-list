describe('doubly-linked-list', function () {

    var ddl;

    beforeEach(function () {
        ddl = new DoublyLinkedList();
    });

    describe('append', function () {
        it('should add new data to the end of list', function () {
            var data = { 'prop': 1 },
                result;

            ddl.append(data);
            result = ddl.tail();

            result.should.be.equal(data);
        });

    });

    describe('insertAt', function () {
        it('should put data by index', function () {

        });
    });

    describe('at', function () {
        it('should not except not numbers as paremeter', function () {

        });

        it('should return data by index', function () {

        });
    });

    describe('head', function () {
        it('should return data of the head element', function () {
            var data0 = { 'prop': 1 },
                data1 = { 'prop': 2 },
                data2 = { 'prop': 3 },
                result;

            ddl.append(data0).append(data1).append(data2);
            result = ddl.at(1);

            result.should.be.equal(data1);
        });
    });

    describe('tail', function () {
        it('should return data of the tail element', function () {

        });
    });

});