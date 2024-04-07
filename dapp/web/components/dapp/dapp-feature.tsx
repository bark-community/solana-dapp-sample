'use client';

import { useWallet } from '@solana/wallet-adapter-react';
import { ExplorerLink } from '../cluster/cluster-ui';
import { WalletButton } from '../solana/solana-provider';
import { AppHero, ellipsify } from '../ui/ui-layout';
import { useDappProgram } from './dapp-data-access';
import { DappCreate, DappProgram } from './dapp-ui';

export default function DappFeature() {
  const { publicKey } = useWallet();
  const { programId } = useDappProgram();

  return publicKey ? (
    <div>
      <AppHero
        title="Dapp"
        subtitle={'Run the program by clicking the "Run program" button.'}
      >
        <p className="mb-6">
          <ExplorerLink
            path={`account/${programId}`}
            label={ellipsify(programId.toString())}
          />
        </p>
        <DappCreate />
      </AppHero>
      <DappProgram />
    </div>
  ) : (
    <div className="max-w-4xl mx-auto">
      <div className="hero py-[64px]">
        <div className="hero-content text-center">
          <WalletButton className="btn btn-primary" />
        </div>
      </div>
    </div>
  );
}
