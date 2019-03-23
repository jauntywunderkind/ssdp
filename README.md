# network-interfaces-async

> Streaming alternative to os.networkInterfaces()

`network-interfaces-async` is an async iterator that returns all network interfaces on a system.

As new interface are hotplugged or added, they will also be returned.

# Implementation

Node.js platform doesn't offer any way to detect changes to network interfaces. So under the hood, network-interfaces-async polls `os.networkInterfaces` on a regular cadence, and emits new interfaces that it finds.
