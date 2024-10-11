import { Container, Html, Section, Text } from "@react-email/components";

interface EmailProps {
  email: string;
  message: string;
}

export default function ContactEmail({ email, message }: EmailProps) {
  return (
    <Html>
      <Section style={{ backgroundColor: "#f3f4f6", padding: "40px" }}>
        <Container style={{ maxWidth: "600px", margin: "0 auto" }}>
          <Section
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              padding: "32px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              border: "1px solid #e5e7eb",
            }}
          >
            <Text
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: "24px",
                color: "#1f2937", // Gris foncé
              }}
            >
              Nouveau message de contact
            </Text>

            <Text
              style={{
                fontSize: "14px",
                color: "#374151", // Gris foncé pour le texte
                marginBottom: "16px",
              }}
            >
              <span style={{ fontWeight: "600", color: "#111827" }}>
                Email:
              </span>{" "}
              {email}
            </Text>

            <Text
              style={{
                fontSize: "14px",
                color: "#374151",
              }}
            >
              <span style={{ fontWeight: "600", color: "#111827" }}>
                Message:
              </span>{" "}
              {message}
            </Text>

            <Section style={{ marginTop: "32px", textAlign: "center" }}>
              <Text style={{ fontSize: "12px", color: "#6b7280" }}>
                Ce message a été généré automatiquement par le formulaire de
                contact.
              </Text>
            </Section>
          </Section>
        </Container>
      </Section>
    </Html>
  );
}
