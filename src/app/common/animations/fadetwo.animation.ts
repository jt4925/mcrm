// import { trigger, animate, transition, style, query } from '@angular/animations';

// export const fadetwoAnimation =

//     trigger('fadetwoAnimation', [

//         transition( '* => *', [

//             query(':enter',
//                 [
//                     style({ opacity: 0 })
//                 ],
//                 { optional: true }
//             ),

//             query(':leave',
//                 [
//                     style({ opacity: 1 }),
//                     animate('0.5s', style({ opacity: 0 }))
//                 ],
//                 { optional: true }
//             ),

//             query(':enter',
//                 [
//                     style({ opacity: 0 }),
//                     animate('0.5s', style({ opacity: 1 }))
//                 ],
//                 { optional: true }
//             )

//         ])

//     ]);


import {
  trigger,
  animate,
  transition,
  style,
  query,
  group
} from '@angular/animations';

export const fadetwoAnimation = trigger('fadetwoAnimation', [
transition('* => *', [
  query(
    ':enter',
    [style({ opacity: 0 })],
    { optional: true }
  ),
  query(
    ':leave',
    [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))],
    { optional: true }
  ),
  query(
    ':enter',
    [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))],
    { optional: true }
  )
])
]);
