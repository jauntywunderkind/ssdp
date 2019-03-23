"use module"
import networkInterfaceAsync from "./network-interfaces-async.js"
import forEach from "async-iter-static/forEach.js"

async function main( options){
	return forEach( networkInterfacesAsync( options), function( iface){
		console.log( JSON.toString( iface))
	})
}

// temporary: package.json#esm.cjs.vars should enable this, no?
console.log(`module:${typeof module} require:${typeof require}`)
if( typeof module!== "undefined"&& typeof require!== "undefined"&& require.main=== module){
	console.log("ok")
	main()
}



