// html要素取得
const date = document.getElementById('date');
const text = document.getElementById('text');
const option = document.getElementById('option');
const cashAmount = document.getElementById('cashAmount');
const addBtn = document.getElementById('addBtn');
const expenseSpace = document.getElementById('expenseSpace');
const budgetSpace = document.getElementById('budgetSpace');

// クラス名文字列を定義
const income = 'income';
const expense = 'expense';

// 値を定義
let totalAmount = 0;
let incomeCashAmount = 0;
let expenseCashAmount = 0;
let plusOrMinus = '';
const yen = '円';

// 初期残高表示
budgetSpace.innerHTML = totalAmount + yen;

// 追加ボタンクリック処理
addBtn.addEventListener('click', () => {
    
    if (isNaN(cashAmount.value) || cashAmount.value.trim() === "") {
        alert("金額を入力してください");
        return;
    };


    // 箱div要素作成
    const boxDiv = document.createElement('div');
    boxDiv.setAttribute('id','boxDiv');
    // 日にち、テキスト、オプション、金額用div作成
    const divDate = document.createElement('div');
    divDate.setAttribute('id','divDate');
    const divText = document.createElement('div');
    divText.setAttribute('id','divText');
    const divOption = document.createElement('div');
    divOption.setAttribute('id','divOption');
    const divCashAmount = document.createElement('div');
    divCashAmount.setAttribute('id','divCashAmount');
    // 削除ボタン作成
    const deliBtn = document.createElement('input');
    deliBtn.type = 'button';
    deliBtn.classList.add('deliBtn');
    deliBtn.value = '削除';
    

    // 箱div要素に代入
    divDate.innerHTML = date.value;
    divText.innerHTML = text.value;
    divOption.innerHTML = option.value;
    boxDiv.appendChild(divDate);
    boxDiv.appendChild(divText);
    boxDiv.appendChild(divOption);
    boxDiv.appendChild(divCashAmount);
    boxDiv.appendChild(deliBtn);
    // リスト表示div内に箱div代入
    expenseSpace.appendChild(boxDiv);
    console.log(expenseSpace);
        
    // オプション選択判別
    if (option.value === '収入'){
        // 収入の場合残高に金額を足す
        incomeCashAmount = parseInt(cashAmount.value);
        totalAmount += incomeCashAmount;
        console.log(totalAmount);
        // plusOrMinus変数をプラスに書き換えてincomeクラスをdivCashAmountにつける
        plusOrMinus = '+';
        divCashAmount.classList.add('income');
        // 入力された金額をvalueに保存
        divCashAmount.value = incomeCashAmount;
    } else if (option.value === '支出'){
        // 支出の場合残高から金額を引く
        expenseCashAmount = parseInt(cashAmount.value);
        totalAmount -= expenseCashAmount;
        console.log(totalAmount);
        // plusOrMinus変数をマイナスに書き換えてexpenseクラスをdivCashAmountにつける
        plusOrMinus = '-';
        divCashAmount.classList.add('expense');
        // 入力された金額をvalueに保存
        divCashAmount.value = expenseCashAmount;
    }
    
    // divCashAmount要素に入力された値に-+と円をつけてdiv要素に追加
    divCashAmount.innerHTML = plusOrMinus + cashAmount.value + yen;
    
    // 残高を更新
    if (totalAmount < 0){
        budgetSpace.classList.remove(...budgetSpace.classList);
        budgetSpace.classList.add('expense');
        budgetSpace.innerHTML = totalAmount + yen;
    } else if (totalAmount > 0){
        budgetSpace.classList.remove(...budgetSpace.classList);
        budgetSpace.classList.add('income');
        budgetSpace.innerHTML = totalAmount + yen;
    } else {
        budgetSpace.classList.remove(...budgetSpace.classList);
        budgetSpace.innerHTML = totalAmount + yen;
        console.log('ゼロです');
    }
    console.log(budgetSpace.classList);
    budgetSpace.classList

    // 削除ボタンイベント
    deliBtn.addEventListener('click', function() {
        // クラスがincomeの場合の処理
        if (divCashAmount.classList.value === income){
            console.log(totalAmount);
            console.log(divCashAmount.value);
            // totalAmountからdivCashAmountのvalueを引く
            totalAmount -= divCashAmount.value;
            console.log(totalAmount);
            // クラスがexpenseの場合の処理
        } else if (divCashAmount.classList.value === expense){
            console.log(totalAmount);
            console.log(divCashAmount.value);
            // totalAmountからdivCashAmountのvalueを足す
            totalAmount += divCashAmount.value;
            console.log(totalAmount);
        }

        // 残高を更新しboxDivを消す
        if (totalAmount < 0){
            budgetSpace.classList.remove(...budgetSpace.classList);
            budgetSpace.classList.add('expense');
                budgetSpace.innerHTML = totalAmount + yen;
            } else if (totalAmount > 0){
                budgetSpace.classList.remove(...budgetSpace.classList);
                budgetSpace.classList.add('income');
                budgetSpace.innerHTML = totalAmount + yen;
            } else {
                budgetSpace.classList.remove(...budgetSpace.classList);
                budgetSpace.innerHTML = totalAmount + yen;
            }
            console.log(budgetSpace);
            expenseSpace.removeChild(boxDiv);
    })
})






