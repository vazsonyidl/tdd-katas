import {addTwoNumbers, findElement, ListNode} from "./index";

describe('Add-two-numbers', function () {

    describe('#addTwoNumbers', function () {

        it('returns value for multiple lists', () => {
            const list_one_element_three = new ListNode(3, undefined);
            const list_one_element_two = new ListNode(4, list_one_element_three);
            const list_one_element_one = new ListNode(2, list_one_element_two);

            const list_two_element_three = new ListNode(4, undefined);
            const list_two_element_two = new ListNode(6, list_two_element_three);
            const list_two_element_one = new ListNode(5, list_two_element_two);


            expect(addTwoNumbers(list_one_element_one, list_two_element_one)).toEqual(807);
        });
    });

    describe('#findElement', () => {
        it('returns value for single element', () => {
            const element_one = new ListNode(7, undefined);

            expect(findElement(element_one)).toStrictEqual(7);
        })

        it('returns value for two elements', () => {
            const element_two = new ListNode(8, undefined);
            const element_one = new ListNode(7, element_two);

            expect(findElement(element_one)).toEqual('87');
        })

        it('returns value for three elements', () => {
            const element_three = new ListNode(3, undefined);
            const element_two = new ListNode(4, element_three);
            const element_one = new ListNode(2, element_two);

            expect(findElement(element_one)).toEqual('342');
        })
    })
});