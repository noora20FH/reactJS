// Exports the Profile component as a named export called Profile.
// Exports the Gallery component as a default export.

export function Profile() {
    return (
      <img
        src='./logo192.png'
        alt="Katherine Johnson"
      />
      
    );
}
  
export default function Gallery() {
    return (
      <section>
        <h1>Amazing scientists</h1>
        <Profile />
        <Profile />
        <Profile />
        
      </section>
    );
}