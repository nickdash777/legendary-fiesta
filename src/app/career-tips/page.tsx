export default function CareerTips() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">კარიერის რჩევები</h1>

      <div className="grid gap-8 md:grid-cols-2">
        <article className="p-6 bg-card rounded-lg border">
          <h2 className="text-2xl font-semibold mb-4">CV-ს შექმნის რჩევები</h2>
          <ul className="space-y-2">
            <li>• გამოიყენეთ მარტივი და წაკითხვადი შრიფტი</li>
            <li>• ჩაწერეთ მოკლე და ზუსტი ინფორმაცია</li>
            <li>• ხაზი გაუსვით თქვენს მიღწევებს</li>
            <li>• შეამოწმეთ ორთოგრაფია</li>
            <li>• გამოიყენეთ მოქმედებითი ზმნები</li>
          </ul>
        </article>

        <article className="p-6 bg-card rounded-lg border">
          <h2 className="text-2xl font-semibold mb-4">ინტერვიუსთვის მზაობა</h2>
          <ul className="space-y-2">
            <li>• შეისწავლეთ კომპანიის ისტორია</li>
            <li>• მოამზადეთ კითხვები</li>
            <li>• იმუშავეთ თქვენს პრეზენტაციაზე</li>
            <li>• მოამზადეთ პორტფოლიო</li>
            <li>• იყავით დროული</li>
          </ul>
        </article>

        <article className="p-6 bg-card rounded-lg border">
          <h2 className="text-2xl font-semibold mb-4">კარიერული განვითარება</h2>
          <ul className="space-y-2">
            <li>• განაგრძეთ განათლება</li>
            <li>• მიიღეთ სერტიფიკატები</li>
            <li>• გაუმჯობესეთ უნარები</li>
            <li>• შექმენით პროფესიონალური ქსელი</li>
            <li>• მიჰყევით ინდუსტრიის ტენდენციებს</li>
          </ul>
        </article>

        <article className="p-6 bg-card rounded-lg border">
          <h2 className="text-2xl font-semibold mb-4">
            პროფესიონალური უნარები
          </h2>
          <ul className="space-y-2">
            <li>• კომუნიკაციის უნარები</li>
            <li>• ლიდერობა</li>
            <li>• პრობლემების გადაჭრა</li>
            <li>• დროის მართვა</li>
            <li>• ადაპტაციურობა</li>
          </ul>
        </article>
      </div>
    </div>
  );
}
