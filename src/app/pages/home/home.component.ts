import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products = [
    {
      title: "Samsung Galaxy S22",
      description: "Magnifique écran, bonne performance et batterie longue durée",
      price: 450
    },
    {
      "title": "Nightmare on Elm Street 3: Dream Warriors, A",
      "description": "Undet circ-suffocate NOS",
      "price": 773
    },
    {
      "title": "Gideon's Army",
      "description": "Woodworking machine acc",
      "price": 811
    },
    {
      "title": "Demon Wind",
      "description": "Orthostatic hypotension",
      "price": 213
    },
    {
      "title": "Second Man, The (O Defteros Andras)",
      "description": "Testicular hyperfunction",
      "price": 635
    },
    {
      "title": "Liliom",
      "description": "Resp TB NEC-no exam",
      "price": 316
    },
    {
      "title": "Burning Palms",
      "description": "Sbac mono leuk w rmsion",
      "price": 750
    },
    {
      "title": "Wasp Woman, The",
      "description": "Fall-crew comm aircraft",
      "price": 931
    },
    {
      "title": "One Mile Away",
      "description": "Cns disorder NEC",
      "price": 659
    },
    {
      "title": "Fun Size",
      "description": "Loose body-unspec",
      "price": 626
    },
    {
      "title": "Louis C.K.: Live at the Beacon Theater",
      "description": "Vitreous membranes",
      "price": 275
    },
    {
      "title": "Very Potter Musical, A",
      "description": "Coal workers' pneumocon",
      "price": 688
    },
    {
      "title": "Wall, The (Die Wand)",
      "description": "Rupture uterus NOS-deliv",
      "price": 467
    },
    {
      "title": "Housekeeper, The (femme de ménage, Une)",
      "description": "Skin - kaposi's sarcoma",
      "price": 871
    },
    {
      "title": "Last Resort (National Lampoon's Last Resort)",
      "description": "Follow-up surgery NOS",
      "price": 829
    },
    {
      "title": "Loosies",
      "description": "Toxoplasm meningoenceph",
      "price": 203
    },
    {
      "title": "Blue Bird, The",
      "description": "Dental caries NEC",
      "price": 266
    },
    {
      "title": "Ghost and the Darkness, The",
      "description": "Lat disl prox tibia-open",
      "price": 426
    },
    {
      "title": "Wonderland",
      "description": "Postprocedural fever",
      "price": 780
    },
    {
      "title": "Seducing Doctor Lewis (Grande séduction, La)",
      "description": "Sbac lym leu wo ach rmsn",
      "price": 380
    },
    {
      "title": "Sixpack (Pussikaljaelokuva)",
      "description": "Goodpasture's syndrome",
      "price": 707
    },
    {
      "title": "Weather Underground, The",
      "description": "Injury digital nerve",
      "price": 348
    },
    {
      "title": "Killer Bean 2: The Party",
      "description": "Progressive bulbar palsy",
      "price": 324
    },
    {
      "title": "Every Man for Himself (Slow Motion) (Sauve qui peut (la vie))",
      "description": "Inj port/splen vess NEC",
      "price": 945
    },
    {
      "title": "Too Beautiful for You (Trop belle pour toi)",
      "description": "Mono leuk NOS relapse",
      "price": 300
    },
    {
      "title": "Bush's Brain",
      "description": "Torsion of testis NOS",
      "price": 614
    }


  ]



  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  onAddCart(event: any): void {
    this.cartService.addToCart({
      title: event.title,
      description: event.description,
      price: event.price
    })
  }

}
