import Continua from "continua"
import { networkInterfaces } from "os"

export async function *interfaces( getInterfaces= interfacesProducer, options){
	return yield *Continua( getInterfaces, options)
}

/**
* Emit every address found on the system
*/
export function * interfacesProducer( interfaces= networkInterfaces()){
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
export async function * ipv4( addresses= _interfaces()){
	for await( const addr of addresses){
		if( addr.family!== "IPv4") {
			continue
		}
		yield addr
	}
}

/**
* filter a set of addresses to only ipv6 matches
*/
export async function * ipv6( addresses= _interfaces()){
	for await( const addr of addresses){
		if( addr.family!== "IPv6") {
			continue
		}
		yield addr
	}
}

/**
* Pick off the address componenet from addresses
*/
export async function * addresses( interfaces= ipv4()){
	for await( const addr of interfaces){
		yield addr.address
	}
}
