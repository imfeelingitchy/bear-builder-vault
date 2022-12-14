# Vault Contract

This smart contract implements a vault that functions based on the principles of the [Dead Man's Switch](https://www.computerhope.com/jargon/d/dead-mans-switch.htm). The deployer may store some valuable assets in the vault, and can keep it there so long as they check in regularly. While they are active, they may withdraw the assets at any time. However, if they do not check in, the vault disburses its contents to the people who have staked their claim for the same.

One possible use-case for such a mechanism could be the automatic enforcement of one's will.

Smart contract: [Reach](https://reach.sh)\
Front-end: React JS\
Note: The GUI is for demonstration purposes only, and is not meant for real-world use.

The Deployer indicates that they are present, so the funds are retained:
![alt text](https://github.com/imfeelingitchy/bear-builder-vault/blob/main/images/img2.png)

The Attacher(s) stake their claim while the Deployer is active:
![alt text](https://github.com/imfeelingitchy/bear-builder-vault/blob/main/images/img1.png)

The Deployer failed push the button in time, so they forfeit the funds:
![alt text](https://github.com/imfeelingitchy/bear-builder-vault/blob/main/images/img3.png)

The Attacher(s) now claim the same:
![alt text](https://github.com/imfeelingitchy/bear-builder-vault/blob/main/images/img4.png)
