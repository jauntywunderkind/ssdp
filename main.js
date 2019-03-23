"use module"
import networkInterfacesAsync from "./network-interfaces-async.js"
import forEach from "async-iter-static/forEach.js"

async function main( options){
	return forEach( networkInterfacesAsync( options), function( iface){
		console.log( JSON.stringify( iface))
	})
}

if( typeof module!== "undefined"&& typeof require!== "undefined"&& require.main=== module){
	main()
}



