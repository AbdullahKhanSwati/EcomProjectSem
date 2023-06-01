const data = [{
  catId: 'c1',
  catTitle: 'single bed room',
  description: "Rent per Night",
  banner: "https://media.istockphoto.com/id/155099516/photo/hospital-bed-at-night.jpg?b=1&s=170667a&w=0&k=20&c=ioHVpB-LhS_Wt2SOXEunMx8N2C2_ipmUjKA4eUiWaZw=",
  rooms:
    [
      {
        id: 'r1',
        images: [
          "https://media.istockphoto.com/id/1336925615/photo/a-guest-bedroom-with-a-queen-sized-bed-and-nightstand-at-a-short-term-rental-small-cottage.jpg?b=1&s=170667a&w=0&k=20&c=ljrPWZC6tIyrBbt58jguTJyMNIo14C5n7ValE84mAf8=",
          "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHNoaXJ0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        ],
        title: "Single bed room",
        desc: "Rent per Night",
        pricePerNight: 40,
      },
      {
        id: 'r2',
        images: [
          "https://media.istockphoto.com/id/157483486/photo/childrens-bedroom.jpg?b=1&s=170667a&w=0&k=20&c=9JxeM_PxL96SmhIdYV0fGSAHycjtGSQV38a4x7oJagg=",
          "https://plus.unsplash.com/premium_photo-1668485968521-4e182e8093d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hpcnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
        ],
        title: "Single bed room",
        desc: "Rent per Night",
        pricePerNight: 45,
      },
      {
        id: 'r3',
        images: [
          "https://media.istockphoto.com/id/1344083371/photo/view-into-a-modern-guest-room-through-a-doorway.jpg?b=1&s=170667a&w=0&k=20&c=MGQvij0KC1aOdg2AD9bppE6dleLtR-bDBShSz8js6qE=",
          "https://plus.unsplash.com/premium_photo-1668485968521-4e182e8093d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hpcnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
        ],
        title: "Single Bed Room",
        desc: "Rent per Night",
        pricePerNight: 50
      },
    ]
},
{
  catId: 'c2',
  catTitle: 'Double Bed Room',
  description: "Rent per Night",
  banner: "https://media.istockphoto.com/id/1036068800/photo/eco-cotton-linen-and-blanket-on-a-bed-in-nature-loving-family-guesthouse-for-spring-and.jpg?b=1&s=170667a&w=0&k=20&c=natfxI3Iy6InmNs4ZrcPzEu9d1P-cOuFu7GjXun5Eew=",
  rooms:
    [
      {
        id: 'r4',
        images: [
          "https://media.istockphoto.com/id/1353824130/photo/a-room-for-two.jpg?b=1&s=170667a&w=0&k=20&c=_73zEY8euhKqPdmk36KOYgBT9eAW254Fy6l-Ft-lEcs=",
          "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHNoaXJ0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        ],
        title: "Double Bed Room",
        desc: "Rent per Night",
        pricePerNight: 70,
      },
      {
        id: 'r5',
        images: [
          "https://media.istockphoto.com/id/1338453837/photo/light-and-cozy-modern-hotel-room-with-comfortable-king-size-bed-large-window-and-blue.jpg?b=1&s=170667a&w=0&k=20&c=v6K5uEoWarClXtKVEDEuW7cNMVyJwC7Fb7vIL6xGoto=",
          "https://plus.unsplash.com/premium_photo-1668485968521-4e182e8093d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hpcnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
        ],
        title: "Double Bed Room",
        desc: "Rent per Night",
        pricePerNight: 65,
      },
      {
        id: 'r6',
        images: [
          "https://media.istockphoto.com/id/991205262/photo/feminine-bedroom-interior-with-a-double-bed-with-dotted-sheets-armchair-art-collection-and.jpg?b=1&s=170667a&w=0&k=20&c=s6BtToGWQ6QhtqpvbHqLI7h875Rw5e3QDPHLPmc9i3I=",
          "https://plus.unsplash.com/premium_photo-1668485968521-4e182e8093d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hpcnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
        ],
        title: "Double Bed Room",
        desc: "Rent per Night",
        pricePerNight: 75
      },
    ]
},
{
  catId: 'c3',
  catTitle: 'Family Bed Room',
  description: "Rent per Night",
  banner: "https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cXVhZCUyMHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
  rooms:
    [
      {
        id: 'r7',
        images: [
          "https://media.istockphoto.com/id/1352702316/photo/cozy-furnished-porch-enclosure-in-autumn-season.jpg?b=1&s=170667a&w=0&k=20&c=7n1HAWiyiZpTdNX4XdaMYYBrKTJbZ__8JInFM5zzGRs=",
          "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHNoaXJ0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        ],
        title: "Family Bed Room",
        desc: "Rent per Night",
        pricePerNight: 95,
      },
      {
        id: 'r8',
        images: [
          "https://media.istockphoto.com/id/1312439845/photo/stylish-living-room-interior-with-beautiful-house-plants.jpg?b=1&s=170667a&w=0&k=20&c=U0jVX0vabyDYg6tHEd2D-1YUuFLJZCwMhoQGu15j0LE=",
          "https://plus.unsplash.com/premium_photo-1668485968521-4e182e8093d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hpcnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
        ],
        title: "Family Bed Room",
        desc: "Rent per Night",
        pricePerNight: 90,
      },
      {
        id: 'r9',
        images: [
          "https://media.istockphoto.com/id/1392944035/photo/modern-medical-laboratory.jpg?b=1&s=170667a&w=0&k=20&c=1dmOU76AANVR3CxyuU-4gVMBOP-S__32Rk5IxBs24LE=",
          "https://plus.unsplash.com/premium_photo-1668485968521-4e182e8093d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hpcnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
        ],
        title: "Family Bed Room",
        desc: "Rent per Night",
        pricePerNight: 100
      },
    ]
}
]

export default data;

export const adminCredentials = {
    username : 'Uzair',
    password : '123'
}

export let orders = [];