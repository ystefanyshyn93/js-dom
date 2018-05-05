/*(function(){
    document.querySelector ('.form-add form input[type=submit]')
    .addEventListener('click',addRecord);
    
    function addRecord(e) {
        e.preventDefault();
        const inputText = document.querySelector('.form-add form input[name=record-text]').value;
        const userName = document.querySelector('.form-add form input[name=user-name]').value;
        const dateObj = new Date();
        const dateTime = dateObj.toDateString() + ' ' + dateObj.toLocaleTimeString();
        const recordTemplate = `<p><span>${dateTime}: </span><span>[${userName}]</span>${inputText}</p>`;
        document.querySelector('.records .list').innerHTML += recordTemplate;
        
    }
})();*/

$(() => {
    $('.form-add form input[type=submit]').click(addRecord);
    function addRecord(e) {
        e.preventDefault();
        const inputText = $('.form-add form input[name=record-text]').val();
        const userName = $('.form-add form input[name=user-name').val();
        const dateObj = new Date();
        const dateTime = dateObj.toDateString() + ' ' + dateObj.toLocaleTimeString();
        const recordTemplate = `<p><span>${dateTime}: </span><span>[${userName}]</span>${inputText}</p>`;
        $('.records .list').append(recordTemplate);
        
    }
});