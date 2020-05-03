angular.module('btcli', ['ui.bootstrap'
	, 'ngSanitize'
])
	.controller('gui', ['$scope', '$http', function ($s, $http) {


		$s.commands = [
			{
				"group": "wallet",
				"name": "abandontransaction",
				"href": "bitcoin-cli/abandontransaction",
				"command": "abandontransaction",
				"args": "\"txid\"",
				"summary": "Marks an in-wallet transaction and all its in-wallet descendants as abandoned. This allows their inputs to be respent."
			},
			{
				"group": "wallet",
				"name": "abortrescan",
				"href": "bitcoin-cli/abortrescan",
				"command": "abortrescan",
				"args": "none",
				"summary": "Stops current wallet rescan triggered by an RPC call, e.g. by an importprivkey call."
			},
			{
				"group": "wallet",
				"name": "addmultisigaddress",
				"href": "bitcoin-cli/addmultisigaddress",
				"command": "addmultisigaddress",
				"args": "nrequired [\"key\",...] ( \"label\" \"address_type\" )",
				"summary": "Adds a P2SH multisig address to the wallet."
			},
			{
				"group": "network",
				"name": "addnode",
				"href": "bitcoin-cli/addnode",
				"command": "addnode",
				"args": "\"node\" \"add|remove|onetry\"",
				"summary": "Attempts to add or remove a node from the addnode list, or to try a connection to a node once."
			},
			{
				"group": "rawtransactions",
				"name": "analyzepsbt",
				"href": "bitcoin-cli/analyzepsbt",
				"command": "analyzepsbt",
				"args": "\"psbt\"",
				"summary": "Examines a PSBT and provides information about what the PSBT contains and the next steps that need to be taken in order to complete the transaction. For each input of a PSBT, analyzepsbt provides information about what information is missing for that input, including whether a UTXO needs to be provided, what pubkeys still need to be provided, which scripts need to be provided, and what signatures are still needed. Every input will also list which role is needed to complete that input, and analyzepsbt will also list the next role in general needed to complete the PSBT. analyzepsbt will also provide the estimated fee rate and estimated virtual size of the completed transaction if it has enough information to do so."
			},
			{
				"group": "wallet",
				"name": "backupwallet",
				"href": "bitcoin-cli/backupwallet",
				"command": "backupwallet",
				"args": "\"destination\"",
				"summary": "Safely copies `wallet.dat` to the specified file, which can be a directory or a path with filename."
			},
			{
				"group": "wallet",
				"name": "bumpfee",
				"href": "bitcoin-cli/bumpfee",
				"command": "bumpfee",
				"args": "\"txid\" ( options )",
				"summary": "Replaces an unconfirmed wallet transaction that signaled RBF with a new transaction that pays a higher fee."
			},
			{
				"group": "network",
				"name": "clearbanned",
				"href": "bitcoin-cli/clearbanned",
				"command": "clearbanned",
				"args": "none",
				"summary": "Clears list of banned nodes."
			},
			{
				"group": "rawtransactions",
				"name": "combinepsbt",
				"href": "bitcoin-cli/combinepsbt",
				"command": "combinepsbt",
				"args": "[\"psbt\",...]",
				"summary": "Implements a Combiner. It can be used at any point in the workflow to merge information added to different versions of the same PSBT. In particular it is useful to combine the output of multiple Updaters or Signers."
			},
			{
				"group": "rawtransactions",
				"name": "combinerawtransaction",
				"href": "bitcoin-cli/combinerawtransaction",
				"command": "combinerawtransaction",
				"args": "[\"hexstring\",...]",
				"summary": "Combines multiple partially signed transactions into one transaction.\nThe combined transaction may be another partially signed transaction or a\nfully signed transaction."
			},
			{
				"group": "rawtransactions",
				"name": "converttopsbt",
				"href": "bitcoin-cli/converttopsbt",
				"command": "converttopsbt",
				"args": "\"hexstring\" ( permitsigdata iswitness )",
				"summary": "Converts an unsigned raw transaction to PSBT format. It ignores existing signatures."
			},
			{
				"group": "util",
				"name": "createmultisig",
				"href": "bitcoin-cli/createmultisig",
				"command": "createmultisig",
				"args": "nrequired [\"key\",...] ( \"address_type\" )",
				"summary": "Creates a P2SH multi-signature address."
			},
			{
				"group": "rawtransactions",
				"name": "createpsbt",
				"href": "bitcoin-cli/createpsbt",
				"command": "createpsbt",
				"args": "[{\"txid\":\"id\",\"vout\":n},...] [{\"address\":amount},{\"data\":\"hex\"},...] ( locktime ) ( replaceable )",
				"summary": "Takes a list of inputs and outputs and converts them to a PSBT with no additional information. It is equivalent to calling createrawtransaction followed by converttopsbt."
			},
			{
				"group": "rawtransactions",
				"name": "createrawtransaction",
				"href": "bitcoin-cli/createrawtransaction",
				"command": "createrawtransaction",
				"args": "[{\"txid\":\"id\",\"vout\":n},...] [{\"address\":amount},{\"data\":\"hex\"},...] ( locktime ) ( replaceable )",
				"summary": "Creates an unsigned serialized transaction that spends a previous output to a new output with a P2PKH or P2SH address. The transaction is not stored in the wallet or transmitted to the network."
			},
			{
				"group": "wallet",
				"name": "createwallet",
				"href": "bitcoin-cli/createwallet",
				"command": "createwallet",
				"args": "\"wallet_name\" ( disable_private_keys )",
				"summary": "Creates and loads a new wallet."
			},
			{
				"group": "rawtransactions",
				"name": "decodepsbt",
				"href": "bitcoin-cli/decodepsbt",
				"command": "decodepsbt",
				"args": "\"psbt\"",
				"summary": "Shows all information in a PSBT in human-readable form, as well as compute its eventual fee if known."
			},
			{
				"group": "rawtransactions",
				"name": "decoderawtransaction",
				"href": "bitcoin-cli/decoderawtransaction",
				"command": "decoderawtransaction",
				"args": "\"hexstring\" ( iswitness )",
				"summary": "Decodes a serialized transaction hex string into a JSON object describing the transaction."
			},
			{
				"group": "rawtransactions",
				"name": "decodescript",
				"href": "bitcoin-cli/decodescript",
				"command": "decodescript",
				"args": "\"hexstring\"",
				"summary": "Decodes a hex-encoded P2SH redeem script."
			},
			{
				"group": "util",
				"name": "deriveaddresses",
				"href": "bitcoin-cli/deriveaddresses",
				"command": "deriveaddresses",
				"args": "\"descriptor\" ( range )",
				"summary": "Returns one or more addresses corresponding to an output descriptor."
			},
			{
				"group": "network",
				"name": "disconnectnode",
				"href": "bitcoin-cli/disconnectnode",
				"command": "disconnectnode",
				"args": "\"[address]\" [nodeid]",
				"summary": "Immediately disconnects from a specified node."
			},
			{
				"group": "wallet",
				"name": "dumpprivkey",
				"href": "bitcoin-cli/dumpprivkey",
				"command": "dumpprivkey",
				"args": "\"address\"",
				"summary": "Returns the wallet-import-format (WIF) private key corresponding to an address. (But does not remove it from the wallet.)"
			},
			{
				"group": "wallet",
				"name": "dumpwallet",
				"href": "bitcoin-cli/dumpwallet",
				"command": "dumpwallet",
				"args": "\"filename\"",
				"summary": "Creates or overwrites a file with all wallet keys in a human-readable format."
			},
			{
				"group": "wallet",
				"name": "encryptwallet",
				"href": "bitcoin-cli/encryptwallet",
				"command": "encryptwallet",
				"args": "\"passphrase\"",
				"summary": "Encrypts the wallet with a passphrase. This is only to enable encryption for the first time. After encryption is enabled, you will need to enter the passphrase to use private keys."
			},
			{
				"group": "util",
				"name": "estimaterawfee",
				"href": "bitcoin-cli/estimaterawfee",
				"command": "estimaterawfee",
				"args": "conf_target (threshold)",
				"summary": "Estimates the approximate fee per kilobyte needed for a transaction to begin\nconfirmation within conf_target blocks if possible. External clients can query and use this data in their own fee estimation logic."
			},
			{
				"group": "util",
				"name": "estimatesmartfee",
				"href": "bitcoin-cli/estimatesmartfee",
				"command": "estimatesmartfee",
				"args": "conf_target (\"estimate_mode\")",
				"summary": "Estimates the approximate fee per kilobyte needed for a transaction to begin\nconfirmation within conf_target blocks if possible and return the number of blocks\nfor which the estimate is valid."
			},
			{
				"group": "rawtransactions",
				"name": "finalizepsbt",
				"href": "bitcoin-cli/finalizepsbt",
				"command": "finalizepsbt",
				"args": "\"psbt\" ( extract )",
				"summary": "Finalizes any partial signatures, and if all inputs are finalized, converts the result to a fully signed transaction which can be broadcast with sendrawtransaction."
			},
			{
				"group": "rawtransactions",
				"name": "fundrawtransaction",
				"href": "bitcoin-cli/fundrawtransaction",
				"command": "fundrawtransaction",
				"args": "\"hexstring\" ( options iswitness )",
				"summary": "Adds inputs to a transaction until it has enough in value to meet its out value."
			},
			{
				"group": "deprecated",
				"name": "generate",
				"href": "bitcoin-cli/generate",
				"command": "generate",
				"args": "nblocks ( maxtries )",
				"summary": "Nearly instantly generates blocks."
			},
			{
				"group": "generating",
				"name": "generatetoaddress",
				"href": "bitcoin-cli/generatetoaddress",
				"command": "generatetoaddress",
				"args": "nblocks address (maxtries)",
				"summary": "Mines blocks immediately to a specified address."
			},
			{
				"group": "deprecated",
				"name": "getaccount",
				"href": "bitcoin-cli/getaccount",
				"command": "getaccount",
				"args": "(Deprecated, will be removed in V0.18. To use this command, start bitcoind with -deprecatedrpc=accounts)",
				"summary": "Returns the name of the account associated with the given address."
			},
			{
				"group": "deprecated",
				"name": "getaccountaddress",
				"href": "bitcoin-cli/getaccountaddress",
				"command": "getaccountaddress",
				"args": "(Deprecated, will be removed in V0.18. To use this command, start bitcoind with -deprecatedrpc=accounts)",
				"summary": "Returns the current Bitcoin address for receiving payments to this account. If the account doesn't exist, it creates both the account and a new address for receiving payment. Once a payment has been received to an address, future calls to this RPC for the same account will return a different address."
			},
			{
				"group": "network",
				"name": "getaddednodeinfo",
				"href": "bitcoin-cli/getaddednodeinfo",
				"command": "getaddednodeinfo",
				"args": "( \"node\" )",
				"summary": "Returns information about the given added node, or all added nodes (except onetry nodes). Only nodes which have been manually added using the `addnode` RPC will have their information displayed."
			},
			{
				"group": "deprecated",
				"name": "getaddressbyaccount",
				"href": "bitcoin-cli/getaddressbyaccount",
				"command": "getaddressbyaccount",
				"args": "(Deprecated, will be removed in V0.18. To use this command, start bitcoind with -deprecatedrpc=accounts)",
				"summary": "Returns a list of every address assigned to a particular account."
			},
			{
				"group": "wallet",
				"name": "getaddressesbylabel",
				"href": "bitcoin-cli/getaddressesbylabel",
				"command": "getaddressesbylabel",
				"args": "\"label\"",
				"summary": "Returns the list of addresses assigned the specified label."
			},
			{
				"group": "wallet",
				"name": "getaddressinfo",
				"href": "bitcoin-cli/getaddressinfo",
				"command": "getaddressinfo",
				"args": "\"address\"",
				"summary": "Returns information about the given bitcoin address. Some information requires the address\nto be in the wallet."
			},
			{
				"group": "wallet",
				"name": "getbalance",
				"href": "bitcoin-cli/getbalance",
				"command": "getbalance",
				"args": "( \"(dummy)\" minconf include_watchonly )",
				"summary": "Gets the balance in decimal bitcoins across all accounts or for a particular account."
			},
			{
				"group": "blockchain",
				"name": "getbestblockhash",
				"href": "bitcoin-cli/getbestblockhash",
				"command": "getbestblockhash",
				"args": "none",
				"summary": "Returns the header hash of the most recent block on the best block chain."
			},
			{
				"group": "blockchain",
				"name": "getblock",
				"href": "bitcoin-cli/getblock",
				"command": "getblock",
				"args": "\"blockhash\" ( verbosity )",
				"summary": "Gets a block with a particular header hash from the local block database either as a JSON object or as a serialized block."
			},
			{
				"group": "blockchain",
				"name": "getblockchaininfo",
				"href": "bitcoin-cli/getblockchaininfo",
				"command": "getblockchaininfo",
				"args": "none",
				"summary": "Provides information about the current state of the block chain."
			},
			{
				"group": "blockchain",
				"name": "getblockcount",
				"href": "bitcoin-cli/getblockcount",
				"command": "getblockcount",
				"args": "none",
				"summary": "Returns the number of blocks in the local best block chain."
			},
			{
				"group": "blockchain",
				"name": "getblockhash",
				"href": "bitcoin-cli/getblockhash",
				"command": "getblockhash",
				"args": "height",
				"summary": "Returns the header hash of a block at the given height in the local best block chain."
			},
			{
				"group": "blockchain",
				"name": "getblockheader",
				"href": "bitcoin-cli/getblockheader",
				"command": "getblockheader",
				"args": "\"hash\" ( verbose )",
				"summary": "Gets a block header with a particular header hash from the local block database either as a JSON object or as a serialized block header."
			},
			{
				"group": "blockchain",
				"name": "getblockstats",
				"href": "bitcoin-cli/getblockstats",
				"command": "getblockstats",
				"args": "hash_or_height ( stats )",
				"summary": "Computes per block statistics for a given window. All amounts are in satoshis."
			},
			{
				"group": "mining",
				"name": "getblocktemplate",
				"href": "bitcoin-cli/getblocktemplate",
				"command": "getblocktemplate",
				"args": "( TemplateRequest )",
				"summary": "Gets a block template or proposal for use with mining software."
			},
			{
				"group": "blockchain",
				"name": "getchaintips",
				"href": "bitcoin-cli/getchaintips",
				"command": "getchaintips",
				"args": "none",
				"summary": "Returns information about the highest-height block (tip) of each local block chain."
			},
			{
				"group": "blockchain",
				"name": "getchaintxstats",
				"href": "bitcoin-cli/getchaintxstats",
				"command": "getchaintxstats",
				"args": "( nblocks blockhash )",
				"summary": "Computes statistics about the total number and rate of transactions in the chain."
			},
			{
				"group": "network",
				"name": "getconnectioncount",
				"href": "bitcoin-cli/getconnectioncount",
				"command": "getconnectioncount",
				"args": "none",
				"summary": "Returns the number of connections to other nodes."
			},
			{
				"group": "util",
				"name": "getdescriptorinfo",
				"href": "bitcoin-cli/getdescriptorinfo",
				"command": "getdescriptorinfo",
				"args": "\"descriptor\"",
				"summary": "Accepts a descriptor and returns information about it, including its computed checksum."
			},
			{
				"group": "blockchain",
				"name": "getdifficulty",
				"href": "bitcoin-cli/getdifficulty",
				"command": "getdifficulty",
				"args": "none",
				"summary": "Returns the proof-of-work difficulty as a multiple of the minimum difficulty."
			},
			{
				"group": "control",
				"name": "getmemoryinfo",
				"href": "bitcoin-cli/getmemoryinfo",
				"command": "getmemoryinfo",
				"args": "(\"mode\")",
				"summary": "Returns information about memory usage."
			},
			{
				"group": "blockchain",
				"name": "getmempoolancestors",
				"href": "bitcoin-cli/getmempoolancestors",
				"command": "getmempoolancestors",
				"args": "txid (verbose)",
				"summary": "Returns all in-mempool ancestors for a transaction in the mempool."
			},
			{
				"group": "blockchain",
				"name": "getmempooldescendants",
				"href": "bitcoin-cli/getmempooldescendants",
				"command": "getmempooldescendants",
				"args": "txid (verbose)",
				"summary": "Returns all in-mempool descendants for a transaction in the mempool."
			},
			{
				"group": "blockchain",
				"name": "getmempoolentry",
				"href": "bitcoin-cli/getmempoolentry",
				"command": "getmempoolentry",
				"args": "txid",
				"summary": "Returns mempool data for given transaction (must be in mempool)."
			},
			{
				"group": "blockchain",
				"name": "getmempoolinfo",
				"href": "bitcoin-cli/getmempoolinfo",
				"command": "getmempoolinfo",
				"args": "none",
				"summary": "Returns information about the node's current transaction memory pool."
			},
			{
				"group": "mining",
				"name": "getmininginfo",
				"href": "bitcoin-cli/getmininginfo",
				"command": "getmininginfo",
				"args": "none",
				"summary": "Returns various mining-related information."
			},
			{
				"group": "network",
				"name": "getnettotals",
				"href": "bitcoin-cli/getnettotals",
				"command": "getnettotals",
				"args": "none",
				"summary": "Returns information about network traffic, including bytes in, bytes out, and the current time."
			},
			{
				"group": "mining",
				"name": "getnetworkhashps",
				"href": "bitcoin-cli/getnetworkhashps",
				"command": "getnetworkhashps",
				"args": "( nblocks height )",
				"summary": "Returns the estimated current or historical network hashes per second based on the last *n* blocks."
			},
			{
				"group": "network",
				"name": "getnetworkinfo",
				"href": "bitcoin-cli/getnetworkinfo",
				"command": "getnetworkinfo",
				"args": "none",
				"summary": "Returns information about the node's connection to the network."
			},
			{
				"group": "wallet",
				"name": "getnewaddress",
				"href": "bitcoin-cli/getnewaddress",
				"command": "getnewaddress",
				"args": "( \"label\" \"address_type\" )",
				"summary": "Returns a new Bitcoin address for receiving payments. If an account is specified, payments received with the address will be credited to that account."
			},
			{
				"group": "network",
				"name": "getnodeaddresses",
				"href": "bitcoin-cli/getnodeaddresses",
				"command": "getnodeaddresses",
				"args": "( count )",
				"summary": "Returns peer addresses known to this node. It may be used to find nodes to connect to without using a DNS seeder."
			},
			{
				"group": "network",
				"name": "getpeerinfo",
				"href": "bitcoin-cli/getpeerinfo",
				"command": "getpeerinfo",
				"args": "none",
				"summary": "Returns data about each connected network node."
			},
			{
				"group": "wallet",
				"name": "getrawchangeaddress",
				"href": "bitcoin-cli/getrawchangeaddress",
				"command": "getrawchangeaddress",
				"args": "( \"address_type\" )",
				"summary": "Returns a new Bitcoin address for receiving change. This is for use with raw transactions, not normal use."
			},
			{
				"group": "blockchain",
				"name": "getrawmempool",
				"href": "bitcoin-cli/getrawmempool",
				"command": "getrawmempool",
				"args": "( verbose )",
				"summary": "Returns all transaction identifiers (TXIDs) in the memory pool as a JSON array, or detailed information about each transaction in the memory pool as a JSON object."
			},
			{
				"group": "rawtransactions",
				"name": "getrawtransaction",
				"href": "bitcoin-cli/getrawtransaction",
				"command": "getrawtransaction",
				"args": "\"txid\" ( verbose \"blockhash\" )",
				"summary": "Gets a hex-encoded serialized transaction or a JSON object describing the transaction. By default, Bitcoin Core only stores complete transaction data for UTXOs and your own transactions, so the RPC may fail on historic transactions unless you use the non-default `txindex=1` in your Bitcoin Core startup settings."
			},
			{
				"group": "deprecated",
				"name": "getreceivedbyaccount",
				"href": "bitcoin-cli/getreceivedbyaccount",
				"command": "getreceivedbyaccount",
				"args": "(Deprecated, will be removed in V0.18. To use this command, start bitcoind with -deprecatedrpc=accounts)",
				"summary": "Returns the total amount received by addresses in a particular account from transactions with the specified number of confirmations. It does not count coinbase transactions."
			},
			{
				"group": "wallet",
				"name": "getreceivedbyaddress",
				"href": "bitcoin-cli/getreceivedbyaddress",
				"command": "getreceivedbyaddress",
				"args": "\"address\" ( minconf )",
				"summary": "Returns the total amount received by the specified address in transactions with the specified number of confirmations. It does not count coinbase transactions."
			},
			{
				"group": "wallet",
				"name": "getreceivedbylabel",
				"href": "bitcoin-cli/getreceivedbylabel",
				"command": "getreceivedbylabel",
				"args": "\"label\" minconf",
				"summary": "Returns the total amount received by addresses with  in transactions with at least [minconf] confirmations."
			},
			{
				"group": "control",
				"name": "getrpcinfo",
				"href": "bitcoin-cli/getrpcinfo",
				"command": "getrpcinfo",
				"args": "none",
				"summary": "Returns runtime details of the RPC server. At the moment, it returns an array of the currently active commands and how long they’ve been running."
			},
			{
				"group": "wallet",
				"name": "gettransaction",
				"href": "bitcoin-cli/gettransaction",
				"command": "gettransaction",
				"args": "\"txid\" ( include_watchonly )",
				"summary": "Gets detailed information about an in-wallet transaction."
			},
			{
				"group": "blockchain",
				"name": "gettxout",
				"href": "bitcoin-cli/gettxout",
				"command": "gettxout",
				"args": "\"txid\" n ( include_mempool )",
				"summary": "Returns details about an unspent transaction output (UTXO)."
			},
			{
				"group": "blockchain",
				"name": "gettxoutproof",
				"href": "bitcoin-cli/gettxoutproof",
				"command": "gettxoutproof",
				"args": "[\"txid\",...] ( blockhash )",
				"summary": "Returns a hex-encoded proof that one or more specified transactions were included in a block."
			},
			{
				"group": "blockchain",
				"name": "gettxoutsetinfo",
				"href": "bitcoin-cli/gettxoutsetinfo",
				"command": "gettxoutsetinfo",
				"args": "none",
				"summary": "Returns statistics about the confirmed unspent transaction output (UTXO) set. Note that this call may take some time and that it only counts outputs from confirmed transactions---it does not count outputs from the memory pool."
			},
			{
				"group": "wallet",
				"name": "getunconfirmedbalance",
				"href": "bitcoin-cli/getunconfirmedbalance",
				"command": "getunconfirmedbalance",
				"args": "none",
				"summary": "Returns the wallet's total unconfirmed balance."
			},
			{
				"group": "wallet",
				"name": "getwalletinfo",
				"href": "bitcoin-cli/getwalletinfo",
				"command": "getwalletinfo",
				"args": "none",
				"summary": "Provides information about the wallet."
			},
			{
				"group": "zmq",
				"name": "getzmqnotifications",
				"href": "bitcoin-cli/getzmqnotifications",
				"command": "getzmqnotifications",
				"args": "none",
				"summary": "Returns information about the active ZeroMQ notifications."
			},
			{
				"group": "control",
				"name": "help",
				"href": "bitcoin-cli/help",
				"command": "help",
				"args": "( \"command\" )",
				"summary": "Lists all available public RPC commands, or gets help for the specified RPC. Commands which are unavailable will not be listed, such as wallet RPCs if wallet support is disabled."
			},
			{
				"group": "wallet",
				"name": "importaddress",
				"href": "bitcoin-cli/importaddress",
				"command": "importaddress",
				"args": "\"address\" ( \"label\" rescan p2sh )",
				"summary": "Adds an address or pubkey script to the wallet without the associated private key, allowing you to watch for transactions affecting that address or pubkey script without being able to spend any of its outputs."
			},
			{
				"group": "wallet",
				"name": "importmulti",
				"href": "bitcoin-cli/importmulti",
				"command": "importmulti",
				"args": "\"requests\" ( \"options\" )",
				"summary": "Imports addresses or scripts (with private keys, public keys, or P2SH redeem scripts) and optionally performs the minimum necessary rescan for all imports."
			},
			{
				"group": "wallet",
				"name": "importprivkey",
				"href": "bitcoin-cli/importprivkey",
				"command": "importprivkey",
				"args": "\"privkey\" ( \"label\" ) ( rescan )",
				"summary": "Adds a private key to your wallet. The key should be formatted in the wallet import format created by the `dumpprivkey` RPC."
			},
			{
				"group": "wallet",
				"name": "importprunedfunds",
				"href": "bitcoin-cli/importprunedfunds",
				"command": "importprunedfunds",
				"args": "none",
				"summary": "Imports funds without the need of a rescan. Meant for use with pruned wallets."
			},
			{
				"group": "wallet",
				"name": "importpubkey",
				"href": "bitcoin-cli/importpubkey",
				"command": "importpubkey",
				"args": "\"pubkey\" ( \"label\" rescan )",
				"summary": "Adds a public key (in hex) that can be watched as if it were in your wallet but cannot be used to spend. Requires a new wallet backup."
			},
			{
				"group": "wallet",
				"name": "importwallet",
				"href": "bitcoin-cli/importwallet",
				"command": "importwallet",
				"args": "\"filename\"",
				"summary": "Imports private keys from a file in wallet dump file format (see the `dumpwallet` RPC). These keys will be added to the keys currently in the wallet. This call may need to rescan all or parts of the block chain for transactions affecting the newly-added keys, which may take several minutes."
			},
			{
				"group": "rawtransactions",
				"name": "joinpsbts",
				"href": "bitcoin-cli/joinpsbts",
				"command": "joinpsbts",
				"args": "[\"psbt\",...]",
				"summary": "Merges multiple distinct PSBTs into a single PSBT. The multiple PSBTs must have different inputs. The resulting PSBT will contain every input and output from all of the PSBTs. Any signatures provided in any of the PSBTs will be dropped."
			},
			{
				"group": "wallet",
				"name": "keypoolrefill",
				"href": "bitcoin-cli/keypoolrefill",
				"command": "keypoolrefill",
				"args": "( newsize )",
				"summary": "Fills the cache of unused pre-generated keys (the keypool)."
			},
			{
				"group": "deprecated",
				"name": "listaccounts",
				"href": "bitcoin-cli/listaccounts",
				"command": "listaccounts",
				"args": "(Deprecated, will be removed in V0.18. To use this command, start bitcoind with -deprecatedrpc=accounts)",
				"summary": "Lists accounts and their balances."
			},
			{
				"group": "wallet",
				"name": "listaddressgroupings",
				"href": "bitcoin-cli/listaddressgroupings",
				"command": "listaddressgroupings",
				"args": "none",
				"summary": "Lists groups of addresses that may have had their common ownership made public by common use as inputs in the same transaction or from being used as change from a previous transaction."
			},
			{
				"group": "network",
				"name": "listbanned",
				"href": "bitcoin-cli/listbanned",
				"command": "listbanned",
				"args": "none",
				"summary": "Lists all banned IPs/Subnets."
			},
			{
				"group": "wallet",
				"name": "listlabels",
				"href": "bitcoin-cli/listlabels",
				"command": "listlabels",
				"args": "( \"purpose\" )",
				"summary": "Returns the list of all labels, or labels that are assigned to addresses with a specific purpose."
			},
			{
				"group": "wallet",
				"name": "listlockunspent",
				"href": "bitcoin-cli/listlockunspent",
				"command": "listlockunspent",
				"args": "none",
				"summary": "Returns a list of temporarily unspendable (locked) outputs."
			},
			{
				"group": "deprecated",
				"name": "listreceivedbyaccount",
				"href": "bitcoin-cli/listreceivedbyaccount",
				"command": "listreceivedbyaccount",
				"args": "(Deprecated, will be removed in V0.18. To use this command, start bitcoind with -deprecatedrpc=accounts)",
				"summary": "Lists the total number of bitcoins received by each account."
			},
			{
				"group": "wallet",
				"name": "listreceivedbyaddress",
				"href": "bitcoin-cli/listreceivedbyaddress",
				"command": "listreceivedbyaddress",
				"args": "( minconf include_empty include_watchonly address_filter )",
				"summary": "Lists the total number of bitcoins received by each address."
			},
			{
				"group": "wallet",
				"name": "listreceivedbylabel",
				"href": "bitcoin-cli/listreceivedbylabel",
				"command": "listreceivedbylabel",
				"args": "minconf include_empty include_watchonly",
				"summary": "Lists received transactions by label."
			},
			{
				"group": "wallet",
				"name": "listsinceblock",
				"href": "bitcoin-cli/listsinceblock",
				"command": "listsinceblock",
				"args": "( \"blockhash\" target_confirmations include_watchonly include_removed )",
				"summary": "Gets all transactions affecting the wallet which have occurred since a particular block, plus the header hash of a block at a particular depth."
			},
			{
				"group": "wallet",
				"name": "listtransactions",
				"href": "bitcoin-cli/listtransactions",
				"command": "listtransactions",
				"args": "(dummy count skip include_watchonly)",
				"summary": "Returns the most recent transactions that affect the wallet."
			},
			{
				"group": "wallet",
				"name": "listunspent",
				"href": "bitcoin-cli/listunspent",
				"command": "listunspent",
				"args": "( minconf maxconf [\"addresses\",...] [include_unsafe] [query_options])",
				"summary": "Returns an array of unspent transaction outputs belonging to this wallet."
			},
			{
				"group": "wallet",
				"name": "listwalletdir",
				"href": "bitcoin-cli/listwalletdir",
				"command": "listwalletdir",
				"args": "none",
				"summary": "Returns a list of wallets in the wallet directory (either the default wallet directory or the directory configured by the -walletdir parameter)."
			},
			{
				"group": "wallet",
				"name": "listwallets",
				"href": "bitcoin-cli/listwallets",
				"command": "listwallets",
				"args": "none",
				"summary": "Returns a list of currently loaded wallets."
			},
			{
				"group": "wallet",
				"name": "loadwallet",
				"href": "bitcoin-cli/loadwallet",
				"command": "loadwallet",
				"args": "\"filename\"",
				"summary": "Loads a wallet from a wallet file or directory."
			},
			{
				"group": "wallet",
				"name": "lockunspent",
				"href": "bitcoin-cli/lockunspent",
				"command": "lockunspent",
				"args": "unlock ([{\"txid\":\"txid\",\"vout\":n},...])",
				"summary": "Temporarily locks or unlocks specified transaction outputs. A locked transaction output will not be chosen by automatic coin selection when spending bitcoins. Locks are stored in memory only, so nodes start with zero locked outputs and the locked output list is always cleared when a node stops or fails."
			},
			{
				"group": "control",
				"name": "logging",
				"href": "bitcoin-cli/logging",
				"command": "logging",
				"args": "( <include> <exclude> )",
				"summary": "Gets and sets the logging configuration."
			},
			{
				"group": "deprecated",
				"name": "move",
				"href": "bitcoin-cli/move",
				"command": "move",
				"args": "(Deprecated, will be removed in V0.18. To use this command, start bitcoind with -deprecatedrpc=accounts)",
				"summary": "Moves a specified amount from one account in your wallet to another using an off-block-chain transaction."
			},
			{
				"group": "network",
				"name": "ping",
				"href": "bitcoin-cli/ping",
				"command": "ping",
				"args": "none",
				"summary": "Sends a P2P ping message to all connected nodes to measure ping time. Results are provided by the `getpeerinfo` RPC pingtime and pingwait fields as decimal seconds. The P2P `ping` message is handled in a queue with all other commands, so it measures processing backlog, not just network ping."
			},
			{
				"group": "blockchain",
				"name": "preciousblock",
				"href": "bitcoin-cli/preciousblock",
				"command": "preciousblock",
				"args": "\"blockhash\"",
				"summary": "Treats a block as if it were received before others with the same work."
			},
			{
				"group": "mining",
				"name": "prioritisetransaction",
				"href": "bitcoin-cli/prioritisetransaction",
				"command": "prioritisetransaction",
				"args": "<txid> <dummy value> <fee delta>",
				"summary": "Adds virtual priority or fee to a transaction, allowing it to be accepted into blocks mined by this node (or miners which use this node) with a lower priority or fee. (It can also remove virtual priority or fee, requiring the transaction have a higher priority or fee to be accepted into a locally-mined block.)"
			},
			{
				"group": "blockchain",
				"name": "pruneblockchain",
				"href": "bitcoin-cli/pruneblockchain",
				"command": "pruneblockchain",
				"args": "\"height\"",
				"summary": "Prunes the blockchain up to a specified height or timestamp."
			},
			{
				"group": "wallet",
				"name": "removeprunedfunds",
				"href": "bitcoin-cli/removeprunedfunds",
				"command": "removeprunedfunds",
				"args": "\"txid\"",
				"summary": "Deletes the specified transaction from the wallet. Meant for use with pruned wallets and as a companion to importprunedfunds."
			},
			{
				"group": "wallet",
				"name": "rescanblockchain",
				"href": "bitcoin-cli/rescanblockchain",
				"command": "rescanblockchain",
				"args": "(\"start_height\") (\"stop_height\")",
				"summary": "Rescan the local blockchain for wallet related transactions."
			},
			{
				"group": "blockchain",
				"name": "savemempool",
				"href": "bitcoin-cli/savemempool",
				"command": "savemempool",
				"args": "none",
				"summary": "Allows the current mempool to be saved to disk at any time to avoid it being lost due to crashes / power loss."
			},
			{
				"group": "blockchain",
				"name": "scantxoutset",
				"href": "bitcoin-cli/scantxoutset",
				"command": "scantxoutset",
				"args": "<action> ( <scanobjects> )",
				"summary": "Scan the UTXO set for entries that match certain output descriptors."
			},
			{
				"group": "deprecated",
				"name": "sendfrom",
				"href": "bitcoin-cli/sendfrom",
				"command": "sendfrom",
				"args": "(Deprecated, will be removed in V0.18. To use this command, start bitcoind with -deprecatedrpc=accounts)",
				"summary": "Spends an amount from a local account to a bitcoin address."
			},
			{
				"group": "wallet",
				"name": "sendmany",
				"href": "bitcoin-cli/sendmany",
				"command": "sendmany",
				"args": "\"\" {\"address\":amount,...} ( minconf \"comment\" [\"address\",...] replaceable conf_target \"estimate_mode\")",
				"summary": "Creates and broadcasts a transaction which sends outputs to multiple addresses."
			},
			{
				"group": "rawtransactions",
				"name": "sendrawtransaction",
				"href": "bitcoin-cli/sendrawtransaction",
				"command": "sendrawtransaction",
				"args": "\"hexstring\" ( allowhighfees )",
				"summary": "Validates a transaction and broadcasts it to the peer-to-peer network."
			},
			{
				"group": "wallet",
				"name": "sendtoaddress",
				"href": "bitcoin-cli/sendtoaddress",
				"command": "sendtoaddress",
				"args": "\"address\" amount ( \"comment\" \"comment_to\" subtractfeefromamount replaceable conf_target \"estimate_mode\")",
				"summary": "Spends an amount to a given address."
			},
			{
				"group": "deprecated",
				"name": "setaccount",
				"href": "bitcoin-cli/setaccount",
				"command": "setaccount",
				"args": "(Deprecated, will be removed in V0.18. To use this command, start bitcoind with -deprecatedrpc=accounts)",
				"summary": "Puts the specified address in the given account."
			},
			{
				"group": "network",
				"name": "setban",
				"href": "bitcoin-cli/setban",
				"command": "setban",
				"args": "\"subnet\" \"add|remove\" (bantime) (absolute)",
				"summary": "Attempts add or remove a IP/Subnet from the banned list."
			},
			{
				"group": "wallet",
				"name": "sethdseed",
				"href": "bitcoin-cli/sethdseed",
				"command": "sethdseed",
				"args": "( \"newkeypool\" \"seed\" )",
				"summary": "Allows users to set a new HD seed or set their own HD seed. This allows for a new HD seed to be used. A new backup must be made when a new HD seed is set."
			},
			{
				"group": "wallet",
				"name": "setlabel",
				"href": "bitcoin-cli/setlabel",
				"command": "setlabel",
				"args": "\"address\" \"label\"",
				"summary": "Intended as a replacement for the deprecated 'account' API."
			},
			{
				"group": "network",
				"name": "setnetworkactive",
				"href": "bitcoin-cli/setnetworkactive",
				"command": "setnetworkactive",
				"args": "true|false",
				"summary": "Disables/enables all P2P network activity."
			},
			{
				"group": "wallet",
				"name": "settxfee",
				"href": "bitcoin-cli/settxfee",
				"command": "settxfee",
				"args": "amount",
				"summary": "Sets the transaction fee per kilobyte paid by transactions created by this wallet."
			},
			{
				"group": "wallet",
				"name": "signmessage",
				"href": "bitcoin-cli/signmessage",
				"command": "signmessage",
				"args": "\"address\" \"message\"",
				"summary": "Signs a message with the private key of an address."
			},
			{
				"group": "util",
				"name": "signmessagewithprivkey",
				"href": "bitcoin-cli/signmessagewithprivkey",
				"command": "signmessagewithprivkey",
				"args": "\"privkey\" \"message\"",
				"summary": "Signs a message with a given private key."
			},
			{
				"group": "deprecated",
				"name": "signrawtransaction",
				"href": "bitcoin-cli/signrawtransaction",
				"command": "signrawtransaction",
				"args": "\"hexstring\" ( [{\"txid\":\"id\",\"vout\":n,\"scriptPubKey\":\"hex\",\"redeemScript\":\"hex\"},...] [\"privatekey1\",...] sighashtype )",
				"summary": "Signs a transaction in the serialized transaction format using private keys stored in the wallet or provided in the call."
			},
			{
				"group": "rawtransactions",
				"name": "signrawtransactionwithkey",
				"href": "bitcoin-cli/signrawtransactionwithkey",
				"command": "signrawtransactionwithkey",
				"args": "\"hexstring\" [\"privatekey1\",...] ( [{\"txid\":\"id\",\"vout\":n,\"scriptPubKey\":\"hex\",\"redeemScript\":\"hex\"},...] sighashtype )",
				"summary": "Signs inputs for raw transaction"
			},
			{
				"group": "wallet",
				"name": "signrawtransactionwithwallet",
				"href": "bitcoin-cli/signrawtransactionwithwallet",
				"command": "signrawtransactionwithwallet",
				"args": "\"hexstring\" ( [{\"txid\":\"id\",\"vout\":n,\"scriptPubKey\":\"hex\",\"redeemScript\":\"hex\"},...] sighashtype )",
				"summary": "Signs inputs for raw transaction"
			},
			{
				"group": "control",
				"name": "stop",
				"href": "bitcoin-cli/stop",
				"command": "stop",
				"args": "none",
				"summary": "Safely shuts down the Bitcoin Core server."
			},
			{
				"group": "mining",
				"name": "submitblock",
				"href": "bitcoin-cli/submitblock",
				"command": "submitblock",
				"args": "\"hexdata\" ( \"dummy\" )",
				"summary": "Accepts a block, verifies it is a valid addition to the block chain, and broadcasts it to the network. Extra parameters are ignored by Bitcoin Core but may be used by mining pools or other programs."
			},
			{
				"group": "mining",
				"name": "submitheader",
				"href": "bitcoin-cli/submitheader",
				"command": "submitheader",
				"args": "\"hexdata\"",
				"summary": "Decodes the given hexdata as a header and submits it as a candidate chain tip if valid."
			},
			{
				"group": "rawtransactions",
				"name": "testmempoolaccept",
				"href": "bitcoin-cli/testmempoolaccept",
				"command": "testmempoolaccept",
				"args": "[\"rawtxs\"] ( allowhighfees )",
				"summary": "Tests acceptance of a transaction to the mempool without adding it."
			},
			{
				"group": "wallet",
				"name": "unloadwallet",
				"href": "bitcoin-cli/unloadwallet",
				"command": "unloadwallet",
				"args": "( \"wallet_name\" )",
				"summary": "Unloads the wallet referenced by the request endpoint otherwise unloads the wallet specified in the argument."
			},
			{
				"group": "control",
				"name": "uptime",
				"href": "bitcoin-cli/uptime",
				"command": "uptime",
				"args": "none",
				"summary": "Returns the total uptime of the server in seconds."
			},
			{
				"group": "rawtransactions",
				"name": "utxoupdatepsbt",
				"href": "bitcoin-cli/utxoupdatepsbt",
				"command": "utxoupdatepsbt",
				"args": "\"psbt\"",
				"summary": "Searches the set of Unspent Transaction Outputs (UTXOs) to find the outputs being spent by the partial transaction. PSBTs need to have the UTXOs being spent to be provided because the signing algorithm requires information from the UTXO being spent. For segwit inputs, only the UTXO itself is necessary. For non-segwit outputs, the entire previous transaction is needed so that signers can be sure that they are signing the correct thing. Unfortunately, because the UTXO set only contains UTXOs and not full transactions, utxoupdatepsbt will only add the UTXO for segwit inputs."
			},
			{
				"group": "util",
				"name": "validateaddress",
				"href": "bitcoin-cli/validateaddress",
				"command": "validateaddress",
				"args": "\"address\"",
				"summary": "Returns information about the given Bitcoin address."
			},
			{
				"group": "blockchain",
				"name": "verifychain",
				"href": "bitcoin-cli/verifychain",
				"command": "verifychain",
				"args": "( checklevel nblocks )",
				"summary": "Verifies each entry in the local block chain database."
			},
			{
				"group": "util",
				"name": "verifymessage",
				"href": "bitcoin-cli/verifymessage",
				"command": "verifymessage",
				"args": "\"address\" \"signature\" \"message\"",
				"summary": "Verifies a signed message."
			},
			{
				"group": "blockchain",
				"name": "verifytxoutproof",
				"href": "bitcoin-cli/verifytxoutproof",
				"command": "verifytxoutproof",
				"args": "\"proof\"",
				"summary": "Verifies that a proof points to one or more transactions in a block, returning the transactions the proof commits to and throwing an RPC error if the block is not in our best block chain."
			},
			{
				"group": "wallet",
				"name": "walletcreatefundedpsbt",
				"href": "bitcoin-cli/walletcreatefundedpsbt",
				"command": "walletcreatefundedpsbt",
				"args": "[{\"txid\":\"id\",\"vout\":n},...] [{\"address\":amount},{\"data\":\"hex\"},...] ( locktime ) ( replaceable ) ( options bip32derivs )",
				"summary": "Creates a PSBT with the specified inputs and outputs, adds additional inputs and change to it to balance it out, and adds relevant metadata. In particular, for inputs that the wallet knows about (counting towards its normal or watch-only balance), UTXO information will be added. For outputs and inputs with UTXO information present, key and script information will be added which the wallet knows about. It is equivalent to running createrawtransaction, followed by fundrawtransaction, and converttopsbt."
			},
			{
				"group": "wallet",
				"name": "walletlock",
				"href": "bitcoin-cli/walletlock",
				"command": "walletlock",
				"args": "none",
				"summary": "Removes the wallet encryption key from memory, locking the wallet. After calling this method, you will need to call `walletpassphrase` again before being able to call any methods which require the wallet to be unlocked."
			},
			{
				"group": "wallet",
				"name": "walletpassphrase",
				"href": "bitcoin-cli/walletpassphrase",
				"command": "walletpassphrase",
				"args": "\"passphrase\" timeout",
				"summary": "Stores the wallet decryption key in memory for the indicated number of seconds. Issuing the `walletpassphrase` command while the wallet is already unlocked will set a new unlock time that overrides the old one."
			},
			{
				"group": "wallet",
				"name": "walletpassphrasechange",
				"href": "bitcoin-cli/walletpassphrasechange",
				"command": "walletpassphrasechange",
				"args": "\"oldpassphrase\" \"newpassphrase\"",
				"summary": "Changes the wallet passphrase from 'old passphrase' to 'new passphrase'."
			},
			{
				"group": "wallet",
				"name": "walletprocesspsbt",
				"href": "bitcoin-cli/walletprocesspsbt",
				"command": "walletprocesspsbt",
				"args": "\"psbt\" ( sign \"sighashtype\" bip32derivs )",
				"summary": "Takes as input a PSBT, adds UTXO, key, and script data to inputs and outputs that miss it, and optionally signs inputs. Where possible it also finalizes the partial signatures."
			}
		];

		$s.server = 'http://127.0.0.1:8332/'
		$s.auth = null;
		$s.command = null;


		$s.runCommand = function () {
			var id = $s.command.command + '_' + (new Date().getTime());
			console.log($s.command);
			//$http.defaults.headers.common.Authorization = 'Basic ' + btoa('mineuser:minepass');
			$http({
				method: 'POST'
				, url: $s.server
				, headers: {
					'Content-Type': 'application/json'
					, 'Authorization': 'Basic ' + btoa($s.auth)
				}
				, data: { "id": id, "method": $s.command.command, "params": [] }
			}).then(function successCallback(response) {
				console.log(response);
				$s.command.lastResult=response.data;
				// this callback will be called asynchronously
				// when the response is available
			}, function errorCallback(response) {
				$s.command.lastResult=response;
				console.warn(response);
				// called asynchronously if an error occurs
				// or server returns response with an error status.
			});
		}
	}])
	.filter('unsafe', function ($sce) {
		return function (input) {
			//console.log(input);
			//console.log($sce.trustAsHtml(input.replace(/'/g, "\\'")));
			return $sce.trustAsHtml('XD');
		}
	}); 
