/**
 * @constructor
 * @see {@link https://gist.github.com/HA-SEUNG-JEONG/ab33bf343149495d7eb2b82b9ea88e59|GitHub}
 * @param {int} id - 아이디 (required)
 * @param {string} context - 내용 (required)
 * @param {boolean} done - 완료여부 (required)
 * @param {string} category - 카테고리 (required)
 * @param {string} tags - 태그들 (optional)
 */
function Todo(id, context, done, category, tags) {}

/**
 * 할 일을 추가할 수 있다.
 * 내용없이 추가할 수 없다.
 * @param {string} context - 내용 (required)
 */
function createTodo(context) {}

/**
 * 모든 할 일을 조회할 수 있다.
 * ID를 기반으로 특정 할 일을 조회할 수 있다.
 * @param {string} id - 아이디 (required)
 * @param {string} context - 내용 (required)
 */
function readTodo(id, context) {}

/**
 * ID를 제외한 모든 속성을 수정할 수 있다.
 * 특정 할 일의 특정 태그를 수정할 수 있다.
 */
function updateTodo(context, tags) {}

/**
 * ID를 기반으로 특정 할 일을 삭제할 수 있다.
 * 모든 할 일을 제거할 수 있다.
 * 특정 할 일의 특정 태그를 삭제할 수 있다.
 * 특정 할 일의 모든 태그를 제거할 수 있다.
 */
function deleteTodo(id, context, tags) {}

/**
 * @constructor
 * @augments property (required)
 */
function Item() {}
