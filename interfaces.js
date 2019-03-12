import { networkInterfaces } from "os"

/**
* Emit every address found on the system
*/
export function * interfaces( interfaces= networkInterfaces()){
	for( const name of Object.keys( interfaces)){
		const iface= interfaces[ name]
		for( const addr of iface){
			addr.interface= name
			yield addr
		}
	}
}
export default interfaces
// alias for interfaces export
const _interfaces= interfaces

/**
* filter a set of addresses to only ipv4 matches
*/
export function * ipv4( addresses= _interfaces()){
	for( const addr of addresses){
		if( addr.family!== "IPv4") {
			continue
		}
		yield addr
	}
}

/**
* Pick off the address componenet from addresses
*/
export function * addresses( interfaces= ipv4()){
	for( const addr of interfaces){
		yield addr.address
	}
}
