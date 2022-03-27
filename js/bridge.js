let contract_addresses = {
    jaxBridge: '0x3F2Ced500f79B1FEe271932365Fa99021498e828',
    wjxn: '0xcA1262e77Fb25c0a4112CFc9bad3ff54F617f2e6'
}

let jaxBridgeABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"info_hash","type":"bytes32"}],"name":"Add_Penalty_Amount","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"request_id","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"amount_hash","type":"bytes32"},{"indexed":false,"internalType":"string","name":"from","type":"string"},{"indexed":false,"internalType":"uint256","name":"depoist_address_id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"valid_until","type":"uint256"}],"name":"Create_Request","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256[]","name":"ids","type":"uint256[]"}],"name":"Delete_Deposit_Addresses","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"deposit_address_id","type":"uint256"}],"name":"Free_Deposit_Address","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"request_id","type":"uint256"}],"name":"Prove_Request","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"request_id","type":"uint256"}],"name":"Reject_Request","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"request_id","type":"uint256"},{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Release","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"admin","type":"address"}],"name":"Set_Admin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"fee_percent","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"minimum_fee_amount","type":"uint256"}],"name":"Set_Fee","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"uint256","name":"operating_limit","type":"uint256"}],"name":"Set_Operating_Limit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"wallet","type":"address"}],"name":"Set_Penalty_Wallet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"info_hash","type":"bytes32"}],"name":"Subtract_Penalty_Amount","type":"event"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"uint256","name":"operating_limit","type":"uint256"}],"name":"add_bridge_operator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string[]","name":"new_addresses","type":"string[]"}],"name":"add_deposit_addresses","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes32","name":"info_hash","type":"bytes32"}],"name":"add_penalty_amount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"bridge_operators","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"request_id","type":"uint256"},{"internalType":"bytes32","name":"amount_hash","type":"bytes32"},{"internalType":"uint256","name":"deposit_address_id","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"string","name":"from","type":"string"}],"name":"create_request","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"ids","type":"uint256[]"}],"name":"delete_deposit_addresses","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"deposit_address_deleted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"deposit_address_locktimes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"deposit_addresses","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fee_percent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"from","type":"uint256"},{"internalType":"uint256","name":"to","type":"uint256"}],"name":"free_deposit_addresses","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"get_deposit_addresses","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"get_free_deposit_address_id","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"get_new_request_id","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"get_user_requests","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"}],"name":"isBridgeOperator","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minimum_fee_amount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"penalty_amount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"penalty_wallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"request_id","type":"uint256"},{"internalType":"bytes32","name":"txdHash","type":"bytes32"}],"name":"prove_request","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"request_id","type":"uint256"}],"name":"reject_request","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"request_id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"string","name":"from","type":"string"},{"internalType":"address","name":"to","type":"address"},{"internalType":"string","name":"txHash","type":"string"}],"name":"release","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"requests","outputs":[{"internalType":"uint256","name":"deposit_address_id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes32","name":"amount_hash","type":"bytes32"},{"internalType":"bytes32","name":"txdHash","type":"bytes32"},{"internalType":"uint256","name":"valid_until","type":"uint256"},{"internalType":"uint256","name":"prove_timestamp","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"enum JaxBridgeV2.RequestStatus","name":"status","type":"uint8"},{"internalType":"string","name":"from","type":"string"},{"internalType":"string","name":"txHash","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_admin","type":"address"}],"name":"set_admin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fee_percent","type":"uint256"},{"internalType":"uint256","name":"_minimum_fee_amount","type":"uint256"}],"name":"set_fee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"uint256","name":"operating_limit","type":"uint256"}],"name":"set_operating_limit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_penalty_wallet","type":"address"}],"name":"set_penalty_wallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes32","name":"info_hash","type":"bytes32"}],"name":"subtract_penalty_amount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"user_requests","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawByAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"wjxn","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"}]
let erc20ABI = [{ "inputs": [], "stateMutability": "payable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "getOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_tx_fee", "type": "uint256" }], "name": "setTransactionFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_wallet", "type": "address" }], "name": "setTransactionFeeWallet", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "transaction_fee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "transaction_fee_decimal", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "tx_fee_wallet", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const maxUint = "0x" + "f".repeat(64);

void async function main() {
    $("#amountIn").on('input', update_state)
    $("#network1").on('change', update_state)
    $("#network2").on('change', update_state)
    update_state();
    setInterval(check_status, 3000);
    check_status();
}()

async function deposit() {
    let network1 = $("#network1").val();
    let network2 = $("#network2").val();
    if(network1 == "jax") {
        const path = location.pathname.split("/");
        path.pop();
        location.href = path.join("/") + '/payment.html';
        return;
    }
    if(accounts.length == 0){
        connect_wallet();
    }
    const amountIn = $("#amountIn").val();
    const to = $("#to").val();
    let destChainId;
    if(network2 == "bsc" || network2 == "ethereum") {
        destChainId = networks[network2].chainId;
    }
    else destChainId = 0;
    const func = 'deposit';
    // address to, uint destChainId, uint amount, uint nonce, bytes calldata signature
    let contract = new web3.eth.Contract(jaxBridgeABI, contract_addresses.jaxBridge);
    const nonce = await callSmartContract(contract, "nonces", [accounts[0]]);

    const args = [to, destChainId, amountIn, nonce];
    const {success, gas, message} = await estimateGas(contract, func, args);
    if(!success) {
        notifier.warning(message);
        return;
    }
    await notifier.async(runSmartContract(contract, func, args)
        , null, null, `deposit`,
        {labels: {async: "Please wait..."}});
    
}

async function approve() {
    let contract = new web3.eth.Contract(erc20ABI, contract_addresses.wjxn);
    if((await check_allowance()) != true)
        approve_token("WJXN", contract, contract_addresses.jaxBridge, maxUint);
}

async function check_allowance() {
    let contract = new web3.eth.Contract(erc20ABI, contract_addresses.wjxn);
    let allowance = await callSmartContract(contract, "allowance", [accounts[0], contract_addresses.jaxBridge]);
    return allowance >= 500;
}

async function check_status() {
    let network1 = $("#network1").val();
    if(network1 == "jax") {
        $("#btn_deposit").attr("disabled", false);
        $("#btn_approve").hide();
        return;
    }
    if(await check_allowance()) {
        $("#btn_approve").hide();
        $("#btn_deposit").attr("disabled", false);
    }
    else {
        $("#btn_approve").show();
        $("#btn_deposit").attr("disabled", true);
    }
}

async function update_state() {
    let network1 = $("#network1").val();
    let network2 = $("#network2").val();
    let activeChain = $("#chainSelector").val();
    if(network1 == network2) {
        let currentIndex = $("#network2")[0].selectedIndex;
        $("#network2")[0].selectedIndex = (currentIndex + 1) % 3;
    }
    if(network1 != "jax" && network1 != activeChain) {
        $("#chainSelector").val(network1);
        $("#chainSelector").trigger("change");
    }
    network2 = $("#network2").val();
    let amountIn = $("#amountIn").val();
    let amountOut;
    if(network1 == "ethereum") {
        if(network2 == "bsc")
            amountOut = amountIn;
        else
            amountOut = amountIn - 50;
    }
    if(network1 == "bsc") {
        if(network1 == "ethereum")
            amountOut = amountIn;
        else
            amountOut = amountIn - 50;
    }
    if(network1 == "jax") {
        amountOut = amountIn - 1;
    }
    if(amountOut < 0) amountOut = 0;
    $("#amountOut").val(amountOut);
}

function accountChanged() {
    let account = accounts[0];
    $("#to").val(account);
    check_status();
}