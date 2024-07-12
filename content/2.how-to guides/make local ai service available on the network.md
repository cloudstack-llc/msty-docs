---
title: Make Local AI service available on your network
description: Learn how to access Local AI service from other devices on your network
---

Msty's Local AI service is designed to be accessible only from the computer where it is installed. This is a security feature to prevent unauthorized access to your Local AI service. However, there are times when you may want to access your Local AI service from other devices on your network. For example, you may want to use Msty on your laptop while sitting on your couch or use it on your tablet while relaxing in your backyard. Or you might just happen to have a powerful server in your home network and want to use it to run your Local AI service and access it from your laptop or desktop.

Msty makes it easy to make your Local AI service available on your network. You can enable network access to your Local AI service by following these simple steps:

1. Open Msty's settings
2. Go to Local AI
3. Under `Service Configs`, enable `Make Service Available on Network`, and hit `Save`
4. Msty will restart the service for you with Local AI service now available on your network
5. As a convenience, Msty will show you the IP address and port number where the service is available. Find it under `Local AI Service` > `Service Endpoint` > `Network IP`.
6. On a different device on the same network, go to `Settings` > `Remote Model Providers` > `Add New Provider` and select `Msty Remote` as the provider. Enter the IP address and port number you found in step 5, add some models, and hit `Save`.

Now you can use the models from your Local AI service on this device. Accessing Msty from Msty! Mstyception? How cool is that? 


::image-plain{src="/how-to/network-access/enable-network-access.webp" alt="Msty makes is super easy to make your Local AI service available on your network"}
::

## Troubleshooting
* Make sure that your firewall is not blocking the connection. 
* Make sure that the service and the device that you are trying to connect to are on the same network.
* Make sure the Network IP matches the IP address of the device where Msty is installed.
* If you are still having trouble, try restarting Msty.

