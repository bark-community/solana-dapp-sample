use anchor_lang::prelude::*;

declare_id!("3zEwszEHJAYcgy8QCXDASqXqaWE5EGGju8XgagTob92z");

#[program]
pub mod dapp {
    use super::*;

    pub fn greet(_ctx: Context<Initialize>) -> Result<()> {
        msg!("GM!");
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
