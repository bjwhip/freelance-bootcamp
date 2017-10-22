import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html'
})
export class ProposalListComponent{
  proposalOne: Proposal = new Proposal(15, 'Aby Company', 'website.com', 'Tools of the trade', 150, 120, 15, 'myemail@somewebsite.com')
  proposalTwo: Proposal = new Proposal(10, 'Sock Company', 'website.com', 'Tools of the trade', 150, 120, 500, 'myemail@somewebsite.com')
  proposalThree: Proposal = new Proposal(1, 'MINE Company', 'website.com', 'Tools of the trade', 150, 120, 30, 'myemail@somewebsite.com')

  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree
  ]
}
