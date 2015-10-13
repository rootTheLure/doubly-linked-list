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
            var data0 = 1,
                data1 = 2,
                data2 = 3,
                result;

            ddl.append(data0).append(data1).append(data2);
            ddl.insertAt(2, 8);

            result = ddl.at(2);

            result.should.be.equal(8);
        });
    });

    describe('at', function () {
        it('should not except not numbers as paremeter', function () {

        });

        it('should return data by index', function () {
            var data0 = 1,
                data1 = 2,
                data2 = 3,
                result;

            ddl.append(data0).append(data1).append(data2);
            result = ddl.at(1);

            result.should.be.equal(data1);
        });
    });

    describe('indexOf', function () {
        it('should return -1 if data not found', function () {
            var data0 = 1,
                data1 = 2,
                data2 = 3,
                result;

            ddl.append(data0).append(data1).append(data2);
            result = ddl.indexOf(4);

            result.should.be.equal(-1);
        });

        it('should return index of element if data is found', function () {
            var data0 = 1,
                data1 = 2,
                data2 = 3,
                result;

            ddl.append(data0).append(data1).append(data2);
            result = ddl.indexOf(2);

            result.should.be.equal(1);
        });
    });

    describe('head', function () {
        it('should return data of the head element', function () {
            var data0 = 1,
                data1 = 2,
                data2 = 3,
                result;

            ddl.append(data0).append(data1).append(data2);
            result = ddl.head();

            result.should.be.equal(1);
        });
    });

    describe('tail', function () {
        it('should return data of the tail element', function () {
            var data0 = 1,
                data1 = 2,
                data2 = 3,
                result;

            ddl.append(data0).append(data1).append(data2);
            result = ddl.tail();

            result.should.be.equal(3);
        });
    });

    describe('insertAt', function () {
        it('should delete data by index', function () {
            var data0 = 1,
                data1 = 2,
                data2 = 3,
                result;

            ddl.append(data0).append(data1).append(data2);
            ddl.deleteAt(1);

            result = ddl.at(1);

            result.should.be.equal(3);
        });
    });

});