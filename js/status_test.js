let due_timestamp;
let mode;
let request_id;

void async function main() {
    $("#link").html(location.href);
    
    parseQuery();
}()

function parseQuery() {
    const query = location.search.substr(1);
    const paramList = query.split("&");
    const params = paramList.reduce((a, b) => Object.assign(a, {[b.split('=')[0]]: b.split('=')[1] }), {});
    mode = params.mode;
    if(Object.keys(params).includes("id")){
        request_id = params.id;
        get_status();
        $("#request_id").html(request_id);
    }
    else
        goto404();
}

function get_status() {
    switch(mode) {
        case 'jxn_bsc':
            _jxn_bsc();
            return;
        case 'bsc_jxn':
            _bsc_jxn();
            return;
        case 'jax_bsc':
            _jax_bsc();
            return;
        case 'bsc_jax':
            _bsc_jax();
            break;
        default:
            return;
    }
}

async function _jxn_bsc() {
    const web3 = new Web3(networks.bsc.url);
    let contract = new web3.eth.Contract(abis.jxn_bsc, contract_addresses.jxn_bsc);
    let status;
    try {
        let request = await callSmartContract(contract, "requests", [request_id]);
        status = request.status;
        console.log(request);
        // let deposit_address = await callSmartContract(contract, "deposit_addresses", deposit_address_id);
        // console.log(deposit_address);
        
    }catch(e) {
        // goto404();
        status = -1;
    }
    status = parseInt(status);
    if(status == 0) {
        goto('deposit_test.html' + '?id=' + request_id + "&mode=" + mode);
    }
    let text, color;
    switch(status) {
        case -1:
            text = "Invalid request id";
            color = "red";
            break;
        case 1:
            text = "Processing Deposit";
            color = "blue";
            break;
        case 2:
            text = "REJECTED";
            color = "red";
            break;
        case 3:
            text = "EXPIRED";
            color = "#ef5a00";
            break;
        case 4:
            text = "BRIDGED";
            color = "green";
            break;
    }
    $("#status").html(text)
    $("#status").css("color", color);
    // due_timestamp = valid_until - 12 * 3600;
}

async function _bsc_jxn() {
    const web3 = new Web3(networks.bsc.url);
    let contract = new web3.eth.Contract(abis.bsc_jxn, contract_addresses.bsc_jxn);
    try {
        let { amount, from, status } = await callSmartContract(contract, "requests", [request_id]);
        console.log(amount, from, status);
        // let deposit_address = await callSmartContract(contract, "deposit_addresses", deposit_address_id);
        // console.log(deposit_address);
        status = parseInt(status);
        let text, color;
        switch(status) {
            case 0:
                text = "Processing Deposit";
                color = "blue";
                break;
            case 1:
                text = "BRIDGED";
                color = "green";
                break;
        }
        $("#status").html(text)
        $("#status").css("color", color);
        due_timestamp = valid_until - 12 * 3600;
    }catch(e) {
        // goto404();
    }
}


async function _jax_bsc() {
    const web3 = new Web3(networks.bsc.url);
    let contract = new web3.eth.Contract(abis.jax_bsc, contract_addresses.jax_bsc);
    let status;
    try {
        let request = await callSmartContract(contract, "requests", [request_id]);
        status = request.status;
        console.log(request);
        // let deposit_address = await callSmartContract(contract, "deposit_addresses", deposit_address_id);
        // console.log(deposit_address);
        
    }catch(e) {
        // goto404();
        status = -1;
    }
    status = parseInt(status);
    if(status == 0) {
        goto('deposit_test.html' + '?id=' + request_id + "&mode=" + mode);
    }
    let text, color;
    switch(status) {
        case -1:
            text = "Invalid request id";
            color = "red";
            break;
        case 1:
            text = "Processing Deposit";
            color = "blue";
            break;
        case 2:
            text = "REJECTED";
            color = "red";
            break;
        case 3:
            text = "EXPIRED";
            color = "#ef5a00";
            break;
        case 4:
            text = "BRIDGED";
            color = "green";
            break;
    }
    $("#status").html(text)
    $("#status").css("color", color);
    // due_timestamp = valid_until - 12 * 3600;
}

async function _bsc_jax() {
    const web3 = new Web3(networks.bsc.url);
    let contract = new web3.eth.Contract(abis.bsc_jax, contract_addresses.bsc_jax);
    try {
        let { amount, from, status } = await callSmartContract(contract, "requests", [request_id]);
        console.log(amount, from, status);
        // let deposit_address = await callSmartContract(contract, "deposit_addresses", deposit_address_id);
        // console.log(deposit_address);
        status = parseInt(status);
        let text, color;
        switch(status) {
            case 0:
                text = "Processing Deposit";
                color = "blue";
                break;
            case 1:
                text = "BRIDGED";
                color = "green";
                break;
        }
        $("#status").html(text)
        $("#status").css("color", color);
        due_timestamp = valid_until - 12 * 3600;
    }catch(e) {
        // goto404();
    }
}